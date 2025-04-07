import { Link } from 'react-router-dom'

// assets
import QrCode from '../assets/Qr Code.png'

const Footer = () => {
  return (
    <div className=''>
      <footer className='bg-black text-white py-12'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
              {/* Exclusive Column */}
              <div className='space-y-4'>
                <h2 className='text-xl font-bold mb-4'>Exclusive</h2>
                <h3 className='text-lg'>Subscribe</h3>
                <p>Get 10% off your first order</p>

                <div className='flex mt-4 border border-white rounded-md'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='bg-transparent  px-4 py-2 w-full text-white placeholder-gray-400 focus:outline-none'
                  />
                  <button className='bg-transparent px-3'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998'
                        stroke='#FAFAFA'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Support Column */}
              <div className='space-y-4'>
                <h2 className='text-xl font-bold mb-4'>Support</h2>
                <p className='mb-2'>111 Bijoy sarani, Dhaka,</p>
                <p className='mb-2'>DH 1515, Bangladesh</p>
                <p className='mb-2'>exclusive@gmail.com</p>
                <p className='mb-2'>+88015-88888-9999</p>
              </div>

              {/* Account Column */}
              <div className='space-y-4'>
                <h2 className='text-xl font-bold mb-4'>Account</h2>
                <ul className='space-y-2'>
                  <li>
                    <Link to='/account' className='hover:underline'>
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to='/login' className='hover:underline'>
                      Login / Register
                    </Link>
                  </li>
                  <li>
                    <Link to='/cart' className='hover:underline'>
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link to='/wishlist' className='hover:underline'>
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to='/shop' className='hover:underline'>
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Link Column */}
              <div className='space-y-4'>
                <h2 className='text-xl font-bold mb-4'>Quick Link</h2>
                <ul className='space-y-2'>
                  <li>
                    <Link to='/privacy-policy' className='hover:underline'>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to='/terms' className='hover:underline'>
                      Terms Of Use
                    </Link>
                  </li>
                  <li>
                    <Link to='/faq' className='hover:underline'>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact' className='hover:underline'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Download App Column */}
              <div className='space-y-4'>
                <h2 className='text-xl font-bold mb-4'>Download App</h2>
                <p className='text-sm text-gray-300 mb-2'>
                  Save $3 with App New User Only
                </p>

                <div className='flex items-center space-x-4'>
                  {/* QR Code */}
                  <div className='w-24 h-24  p-1'>
                    <img src={QrCode} alt='QR Code' className='w-full h-full' />
                  </div>

                  {/* App Store Buttons */}
                  <div className='flex flex-col space-y-3'>
                    <Link
                      to='#'
                      className='block border border-gray-300 py-2  flex items-center rounded-md'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='25'
                        height='25'
                        viewBox='0 0 48 48'
                      >
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1'
                          x1='1688.489'
                          x2='1685.469'
                          y1='-883.003'
                          y2='-881.443'
                          gradientTransform='matrix(11.64 0 0 22.55 -19615.32 19904.924)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#047ed6'></stop>
                          <stop offset='1' stop-color='#50e6ff'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)'
                          fill-rule='evenodd'
                          d='M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z'
                          clip-rule='evenodd'
                        ></path>
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2'
                          x1='1645.286'
                          x2='1642.929'
                          y1='-897.055'
                          y2='-897.055'
                          gradientTransform='matrix(9.145 0 0 7.7 -15001.938 6931.316)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#ffda1c'></stop>
                          <stop offset='1' stop-color='#feb705'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)'
                          fill-rule='evenodd'
                          d='M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z'
                          clip-rule='evenodd'
                        ></path>
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3'
                          x1='1722.978'
                          x2='1720.622'
                          y1='-889.412'
                          y2='-886.355'
                          gradientTransform='matrix(15.02 0 0 11.5775 -25848.943 10324.73)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#d9414f'></stop>
                          <stop offset='1' stop-color='#8c193f'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)'
                          fill-rule='evenodd'
                          d='M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561'
                          clip-rule='evenodd'
                        ></path>
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4'
                          x1='1721.163'
                          x2='1722.215'
                          y1='-891.39'
                          y2='-890.024'
                          gradientTransform='matrix(15.02 0 0 11.5715 -25848.943 10307.886)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#33c481'></stop>
                          <stop offset='1' stop-color='#61e3a7'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)'
                          fill-rule='evenodd'
                          d='M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      Google Play
                    </Link>
                    <Link
                      to='#'
                      className='block border border-gray-300 py-2  flex items-center rounded-md'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        x='0px'
                        y='0px'
                        width='25'
                        height='25'
                        viewBox='0 0 48 48'
                      >
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1'
                          x1='1688.489'
                          x2='1685.469'
                          y1='-883.003'
                          y2='-881.443'
                          gradientTransform='matrix(11.64 0 0 22.55 -19615.32 19904.924)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#047ed6'></stop>
                          <stop offset='1' stop-color='#50e6ff'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)'
                          fill-rule='evenodd'
                          d='M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z'
                          clip-rule='evenodd'
                        ></path>
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2'
                          x1='1645.286'
                          x2='1642.929'
                          y1='-897.055'
                          y2='-897.055'
                          gradientTransform='matrix(9.145 0 0 7.7 -15001.938 6931.316)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#ffda1c'></stop>
                          <stop offset='1' stop-color='#feb705'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)'
                          fill-rule='evenodd'
                          d='M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z'
                          clip-rule='evenodd'
                        ></path>
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3'
                          x1='1722.978'
                          x2='1720.622'
                          y1='-889.412'
                          y2='-886.355'
                          gradientTransform='matrix(15.02 0 0 11.5775 -25848.943 10324.73)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#d9414f'></stop>
                          <stop offset='1' stop-color='#8c193f'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)'
                          fill-rule='evenodd'
                          d='M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561'
                          clip-rule='evenodd'
                        ></path>
                        <linearGradient
                          id='jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4'
                          x1='1721.163'
                          x2='1722.215'
                          y1='-891.39'
                          y2='-890.024'
                          gradientTransform='matrix(15.02 0 0 11.5715 -25848.943 10307.886)'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0' stop-color='#33c481'></stop>
                          <stop offset='1' stop-color='#61e3a7'></stop>
                        </linearGradient>
                        <path
                          fill='url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)'
                          fill-rule='evenodd'
                          d='M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      Google Play
                    </Link>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className='flex space-x-4 mt-4'>
                  <Link href='#' className='text-white hover:text-gray-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                    </svg>
                  </Link>
                  <a href='#' className='text-white hover:text-gray-300'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                    </svg>
                  </a>
                  <Link
                    to={
                      'https://www.instagram.com/pdpuz?igsh=MTdsN2gzNWVxN2hzMQ=='
                    }
                    className='text-white hover:text-gray-300'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <rect
                        x='2'
                        y='2'
                        width='20'
                        height='20'
                        rx='5'
                        ry='5'
                      ></rect>
                      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                      <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
                    </svg>
                  </Link>
                  <Link
                    to={'https://www.linkedin.com/feed/'}
                    className='text-white hover:text-gray-300'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='w-5 h-5'
                    >
                      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                      <rect x='2' y='9' width='4' height='12'></rect>
                      <circle cx='4' cy='4' r='2'></circle>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
              <p>© Copyright Sulaymonov Salohiddin 2025. All right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
