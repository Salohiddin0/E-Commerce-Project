const TimerForm = ({ inputTime, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className='mt-8'>
    <div className='grid grid-cols-4 gap-4'>
      {['days', 'hours', 'minutes', 'seconds'].map(field => (
        <div key={field} className='flex flex-col items-center'>
          <label htmlFor={field} className='text-gray-500 capitalize'>
            {field}
          </label>
          <input
            type='number'
            id={field}
            name={field}
            value={inputTime[field]}
            onChange={onChange}
            className='border p-2 rounded w-20 text-center'
            min={0}
          />
        </div>
      ))}
    </div>
    <button
      type='submit'
      className='mt-4 w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition-colors'
    >
      Set Time
    </button>
  </form>
)
export default TimerForm
