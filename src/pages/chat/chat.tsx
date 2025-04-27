import React, { useState, useEffect, useRef } from 'react'

// `ChatProps` - componentga kiruvchi props interfeysi
interface ChatProps {
  isOpen: boolean // Modal ochilganmi yoki yo'qligini bildiradi
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>> // Modalni boshqarish uchun holatni o'zgartirish
}

// `Message` - xabar strukturasini ifodalovchi interfeys
interface Message {
  text: string // Xabar matni
  from: string // Kimdan yuborilgan
  messageId: number // Xabarni ajratib turuvchi unikal identifikator
}

// Asosiy `Chat` komponenti
const Chat: React.FC<ChatProps> = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState<string>('') // Yozilayotgan xabar
  const [messages, setMessages] = useState<Message[]>([]) // Xabarlar ro'yxati
  const [lastMessageId, setLastMessageId] = useState<number | null>(null) // Oxirgi xabar ID'si
  const [count, setCount] = useState<number>(0) // Xabarlarni yangilash uchun hisoblagich

  const [chatId, setChatId] = useState<string>('') // `chat_id` ni saqlash uchun holat

  const modalRef = useRef<HTMLDivElement>(null) // Modalga referensiya

  const botToken = '7134710361:AAHQ1fYZQakF6RbNOR5ifKosUhF7uPSrqpk' // Telegram bot tokeni

  // ESC tugmasi bosilsa, modalni yopish
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // ESC bosilsa modalni yopish
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown) // Event listenerni tozalash
  }, [setIsOpen]) // `setIsOpen` o'zgarganda qayta ishlaydi

  // Modal tashqarisiga bosilsa modalni yopish
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  // Telegram botidan `chat_id` olish
  const fetchChatId = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getUpdates`
      )
      const data = await response.json()

      if (data.ok && data.result.length > 0) {
        const firstUpdate = data.result[0] // Birinchi xabarni olish
        const chatIdFromAPI = firstUpdate.message.chat.id // Chat ID olish
        setChatId(chatIdFromAPI.toString()) // `chat_id` ni saqlash
      } else {
        console.error('Chat ID topilmadi.') // Agar `chat_id` topilmasa, xato haqida xabar
      }
    } catch (error) {
      console.error('Chat ID olishda xato:', error) // Xato haqida xabar
    }
  }

  useEffect(() => {
    fetchChatId() // Component ochilganda `chat_id` ni olish
  }, [])

  // Xabar yuborish
  const sendMessage = async () => {
    if (!message.trim() || !chatId) return // Agar xabar bo'sh bo'lsa yoki `chatId` bo'lmasa, yubormaslik

    const newMessage: Message = {
      text: message.trim(), // Yuboriladigan xabar matni
      from: 'Siz', // Xabarni yuborgan shaxs
      messageId: -1 // Yangi xabar uchun identifikator
    }

    setMessages(prevMessages => [...prevMessages, newMessage]) // Yangi xabarni xabarlar ro'yxatiga qo'shish

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: chatId, // Yuboriladigan chat ID
            text: message.trim() // Yuboriladigan xabar matni
          })
        }
      )

      const data = await response.json() // API javobini olish
      if (!data.ok) {
        throw new Error(data.description) // Xato yuz bergan taqdirda xato chiqarish
      }

      console.log('Xabar muvaffaqiyatli yuborildi:', data) // Muvaffaqiyatli yuborilgan xabar haqida xabar
      setMessage('') // Xabar yuborilgach inputni tozalash
    } catch (error) {
      console.error('Xabar yuborishda xato:', error) // Xato haqida xabar
    }
  }

  // Xabarlarni olish
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getUpdates`
      )
      const data = await response.json()

      if (data.ok) {
        const newMessages = data.result
          .filter((update: any) => update.message && update.message.text) // Faqat matnli xabarlar
          .filter(
            (update: any) =>
              lastMessageId === null || // Yangi xabarlarni olish
              update.message.message_id > lastMessageId
          )
          .map((update: any) => ({
            text: update.message.text, // Xabar matni
            from: update.message.from.first_name || 'Bot', // Yuboruvchi ismi
            messageId: update.message.message_id // Xabar ID
          }))

        if (newMessages.length > 0) {
          setMessages(prevMessages => [...prevMessages, ...newMessages]) // Yangi xabarlarni qo'shish
          setLastMessageId(newMessages[newMessages.length - 1].messageId) // Oxirgi xabar ID'sini saqlash
        }
      }
    } catch (error) {
      console.error('Xabarlarni olishda xato:', error) // Xato haqida xabar
    } finally {
      setCount(v => v + 1) // Xabarlarni qayta olish uchun hisoblagichni oshirish
    }
  }

  useEffect(() => {
    const timer = setTimeout(fetchMessages, 1000) // Har 1 soniyada xabarlarni tekshirib turish
    return () => clearTimeout(timer) // Timerni to'xtatish
  }, [count]) // `count` o'zgarganda xabarlarni tekshirib turish

  // "Enter" bosilganda xabar yuborish
  const handleKeyDownSend = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault() // Enter tugmasi bosilganda sahifani qayta yuklamaslik
      sendMessage() // Xabar yuborish
    }
  }

  return (
    isOpen && (
      <div
        onClick={handleClickOutside} // Modal tashqarisiga bosilsa, yopish
        className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      >
        <div
          ref={modalRef} // Modalga referensiya
          className='bg-white p-10 rounded-2xl shadow-2xl relative w-3/4 h-3/4 flex flex-col'
        >
          {/* Modalni yopish tugmasi */}
          <button
            onClick={() => setIsOpen(false)} // Modalni yopish
            className='absolute top-4 right-6 text-gray-600 text-3xl font-bold hover:text-red-600 transition'
          >
            &times;
          </button>

          {/* Modal sarlavhasi */}
          <h2 className='text-3xl mb-8 font-semibold text-center'>
            Chat oynasi
          </h2>

          {/* Xabarlar ro'yxati */}
          <div className='flex-grow overflow-y-auto p-4 bg-gray-300 rounded-lg flex flex-col space-y-4'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === 'Siz' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`${
                    msg.from === 'Siz' ? 'bg-green-500' : 'bg-blue-500'
                  } text-white p-3 rounded-lg max-w-xs`}
                >
                  <strong>{msg.from}: </strong>
                  {msg.text} {/* Yuboruvchi ismi va matni */}
                </div>
              </div>
            ))}
          </div>

          {/* Input va yuborish tugmasi */}
          <div className='flex gap-5 items-center mt-4'>
            <input
              className='w-full p-2 rounded-lg border border-gray-400'
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)} // Xabarni yozish
              onKeyDown={handleKeyDownSend} // "Enter" bosilganda xabar yuborish
              placeholder='Xabar yozing...'
            />
            <button
              onClick={sendMessage} // Xabar yuborish
              className='bg-blue-500 text-white p-3 px-7 rounded-lg hover:bg-blue-600 transition'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default Chat
