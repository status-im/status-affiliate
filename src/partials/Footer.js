import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
              <svg width="40" height="40" viewBox="0 0 140 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M69.9259 0C31.3068 0 0 31.3405 0 70C0 108.66 31.3068 140 69.9259 140C108.545 140 139.852 108.66 139.852 70C139.852 31.3405 108.545 0 69.9259 0Z" fill="#4360DF"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="140" height="140">
                <path fillRule="evenodd" clipRule="evenodd" d="M69.9259 0C31.3068 0 0 31.3405 0 70C0 108.66 31.3068 140 69.9259 140C108.545 140 139.852 108.66 139.852 70C139.852 31.3405 108.545 0 69.9259 0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M72.2742 66.9318C75.7855 67.2978 79.2968 67.6635 83.6137 67.4228C95.3098 66.77 102.395 60.7605 101.892 51.7778C101.38 42.6383 91.9539 37.0075 82.5228 37.534C67.1534 38.3913 55.8514 51.8993 54.5785 67.3383C56.6657 66.8488 58.8627 66.5565 60.9345 66.441C65.2516 66.2003 68.7629 66.566 72.2742 66.9318ZM42.1449 86.912C42.6299 95.29 51.5596 100.452 60.4947 99.9688C75.055 99.1828 85.7627 86.8005 86.9681 72.648C84.9907 73.0968 82.9097 73.365 80.9468 73.4708C76.8568 73.6915 73.5301 73.3563 70.2034 73.0208C66.8769 72.6855 63.5502 72.3503 59.4605 72.571C48.3805 73.1693 41.6679 78.6778 42.1449 86.912Z" fill="white"/>
                </g>
              </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a href="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="https://status.im/privacy-policy/" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">STATUS NETWORK</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://status.im/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Status</a>
              </li>
              <li className="mb-2">
                <a href="https://keycard.tech/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Keycard</a>
              </li>
              <li className="mb-2">
                <a href="https://dap.ps/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">dap.ps</a>
              </li>
              <li className="mb-2">
                <a href="https://assemble.fund/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Assemble</a>
              </li>
              <li className="mb-2">
                <a href="https://embark.status.im/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Embark</a>
              </li>
              <li className="mb-2">
                <a href="https://subspace.status.im/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Subspace</a>
              </li> 
              <li className="mb-2">
                <a href="https://vac.dev/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Vac</a>
              </li>
              <li className="mb-2">
                <a href="https://nimbus.team/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Nimbus</a>
              </li>
            </ul>
          </div>    

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://github.com/status-im" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://twitter.com/ethstatus" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="https://www.facebook.com/ethstatus" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">The Status Network</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
