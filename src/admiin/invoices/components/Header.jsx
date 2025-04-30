const Header = ({ title, count }) => (
  <div className='bg-white p-6 rounded-lg shadow-lg'>
    <div className='flex items-center justify-between'>
      <h2 className='text-3xl font-semibold mb-4'>{title}</h2>
      <p className='font-bold text-xl'>Count({count})</p>
    </div>
  </div>
)
export default Header
