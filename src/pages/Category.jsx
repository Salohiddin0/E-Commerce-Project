import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col'>
          {/* Header section */}
          <div className='relative mb-4'>
            <div className='bg-red-500 text-white py-2 px-6 rounded-r-full inline-block'>
              <Link to='/' className='font-medium'>
                Categories
              </Link>
            </div>
            <h2 className='text-2xl md:text-3xl font-bold mb-8 md:mb-[60px] mt-4 md:mt-[20px]'>
              Browse By Category
            </h2>
          </div>

          {/* Category cards */}
          <div className='w-full overflow-x-auto pb-4 md:pb-0'>
            <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-[30px] justify-center md:justify-between min-w-max md:min-w-0'>
              {/* Card 1 */}
              <div className='border border-gray-400 w-36 sm:w-40 md:w-44 lg:w-48 h-32 md:h-36 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mt-2 md:mt-[25px]'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10 md:w-12 md:h-12'
                  >
                    <g clipPath='url(#clip0_919_868)'>
                      <path
                        d='M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M25.6667 7H31.1354'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M28 44.0052V44.0305'
                        stroke='currentColor'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <line
                        x1='15.1667'
                        y1='39.8334'
                        x2='40.8333'
                        y2='39.8334'
                        stroke='currentColor'
                        strokeWidth='2'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_919_868'>
                        <rect width='56' height='56' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-center mt-2 md:mt-[16px] text-sm md:text-base'>
                  Phone
                </p>
              </div>

              {/* Card 2 */}
              <div className='border border-gray-400 w-36 sm:w-40 md:w-44 lg:w-48 h-32 md:h-36 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mt-2 md:mt-[25px]'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10 md:w-12 md:h-12'
                  >
                    <g clipPath='url(#clip0_920_613)'>
                      <path
                        d='M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M16.3333 46.6666H39.6667'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21 37.3334V46.6667'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 37.3334V46.6667'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8 32H48'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_920_613'>
                        <rect width='56' height='56' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-center mt-2 md:mt-[16px] text-sm md:text-base'>
                  Computers
                </p>
              </div>

              {/* Card 3 */}
              <div className='border border-gray-400 w-36 sm:w-40 md:w-44 lg:w-48 h-32 md:h-36 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mt-2 md:mt-[25px]'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10 md:w-12 md:h-12'
                  >
                    <g clipPath='url(#clip0_920_629)'>
                      <path
                        d='M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21 42V49H35V42'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21 14V7H35V14'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <line
                        x1='24'
                        y1='23'
                        x2='24'
                        y2='34'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                      <line
                        x1='28'
                        y1='28'
                        x2='28'
                        y2='34'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                      <line
                        x1='32'
                        y1='26'
                        x2='32'
                        y2='34'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_920_629'>
                        <rect width='56' height='56' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-center mt-2 md:mt-[16px] text-sm md:text-base'>
                  SmartWatch
                </p>
              </div>

              {/* Card 4 */}
              <div className='border border-gray-400 w-36 sm:w-40 md:w-44 lg:w-48 h-32 md:h-36 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mt-2 md:mt-[25px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='48'
                    height='48'
                    stroke='currentColor'
                    strokeWidth='0.5'
                    fill='none'
                    className='w-10 h-10 md:w-12 md:h-12'
                    viewBox='0 0 16 16'
                  >
                    <path d='M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1z' />
                    <path d='M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0' />
                  </svg>
                </div>
                <p className='text-center mt-2 md:mt-[16px] text-sm md:text-base'>
                  Camera
                </p>
              </div>

              {/* Card 5 */}
              <div className='border border-gray-400 w-36 sm:w-40 md:w-44 lg:w-48 h-32 md:h-36 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mt-2 md:mt-[25px]'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10 md:w-12 md:h-12'
                  >
                    <g clipPath='url(#clip0_920_644)'>
                      <path
                        d='M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_920_644'>
                        <rect width='56' height='56' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-center mt-2 md:mt-[16px] text-sm md:text-base'>
                  HeadPhones
                </p>
              </div>

              {/* Card 6 */}
              <div className='border border-gray-400 w-36 sm:w-40 md:w-44 lg:w-48 h-32 md:h-36 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300 flex flex-col items-center justify-center'>
                <div className='flex justify-center items-center mt-2 md:mt-[25px]'>
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 56 56'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-10 h-10 md:w-12 md:h-12'
                  >
                    <g clipPath='url(#clip0_920_809)'>
                      <path
                        d='M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14 28H23.3333M18.6667 23.3334V32.6667'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 25.6666V25.6908'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M42 30.3333V30.3574'
                        stroke='currentColor'
                        strokeWidth='3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_920_809'>
                        <rect width='56' height='56' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='text-center mt-2 md:mt-[16px] text-sm md:text-base'>
                  Gaming
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-[70px] text-gray-400' />
      </div>
    </div>
  )
}

export default Category
