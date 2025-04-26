import React, { useState, useEffect, useRef } from 'react'

const Chat = ({ isOpen, setIsOpen }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [lastMessageId, setLastMessageId] = useState(null)
  const [count, setCount] = useState(0)

  const modalRef = useRef()

  // ESC tugmasi bosilsa modalni yopish
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [setIsOpen])

  // Modal tashqarisiga bosilsa modalni yopish
  const handleClickOutside = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  // Foydalanuvchi xabarini yuborish
  const sendMessage = async () => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return

    const newMessage = {
      text: trimmedMessage,
      from: 'User',
      messageId: -1
    }
    setMessages(prevMessages => [...prevMessages, newMessage])

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7134710361:AAHQ1fYZQakF6RbNOR5ifKosUhF7uPSrqpk/sendMessage?chat_id=6243315951&text=${encodeURIComponent(
          trimmedMessage
        )}`
      )

      const data = await response.json()
      if (!data.ok) {
        throw new Error(data.description)
      }

      console.log('Xabar muvaffaqiyatli yuborildi:', data)
      setMessage('')
    } catch (error) {
      console.error('Xabar yuborishda xato:', error)
    }
  }

  // Xabarlarni olish
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot7134710361:AAHQ1fYZQakF6RbNOR5ifKosUhF7uPSrqpk/getUpdates`
      )
      const data = await response.json()
      if (data.ok) {
        const newMessages = data.result
          .filter(update => update.message && update.message.text)
          .filter(
            update =>
              lastMessageId === null ||
              update.message.message_id > lastMessageId
          )
          .map(update => ({
            text: update.message.text,
            from: update.message.from.first_name || 'Bot',
            messageId: update.message.message_id
          }))

        if (newMessages.length > 0) {
          setMessages(prevMessages => [...prevMessages, ...newMessages])
          setLastMessageId(newMessages[newMessages.length - 1].messageId)
        }
      }
    } catch (error) {
      console.error('Xabarlarni olishda xato:', error)
    } finally {
      setCount(v => v + 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(fetchMessages, 1000)
    return () => clearTimeout(timer)
  }, [count])

  // "Enter" bosilganda xabar yuborish
  const handleKeyDownSend = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    isOpen && (
      <div
        onClick={handleClickOutside}
        className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
      >
        <div
          ref={modalRef}
          className='bg-white p-10 rounded-2xl shadow-2xl relative w-3/4 h-3/4 flex flex-col'
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-6 text-gray-600 text-3xl font-bold hover:text-red-600 transition'
          >
            &times;
          </button>

          {/* Title */}
          <h2 className='text-3xl mb-8 font-semibold text-center'>
            Chat oynasi
          </h2>

          {/* Chat Area */}
          <div className='flex-grow overflow-y-auto p-4 bg-gray-300 rounded-lg flex flex-col space-y-4'>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === 'User' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`${
                    msg.from === 'User' ? 'bg-green-500' : 'bg-blue-500'
                  } text-white p-3 rounded-lg max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input and Send Button */}
          <div className='flex gap-5 items-center mt-4'>
            <input
              className='w-full p-2 rounded-lg border border-gray-400'
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyDown={handleKeyDownSend}
              placeholder='Xabar yozing...'
            />
            <button
              onClick={sendMessage}
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
