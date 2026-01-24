import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className='bg-neutral-primary-soft rounded-base shadow-xs m-4 relative z-20'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <Link
              to='#'
              style={{ fontFamily: "'Irish Grover', cursive" }}
              className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse hover:text-red-700'
            >
              <img src='/src/img/logo.png' className='h-7' alt='Logo' />
              <span className='text-heading self-center text-2xl font-semibold whitespace-nowrap '>
                Eri Tri Haryanto
              </span>
            </Link>
            <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0'>
              <li>
                <Link
                  to='https://github.com/Eritriharyanto'
                  className='hover:underline me-4 md:me-6'
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  to='https://id.linkedin.com/in/eri-tri-haryanto-0bba09316'
                  className='hover:underline me-4 md:me-6'
                >
                  Linkind
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-default sm:mx-auto lg:my-8 text-bold' />
          <span className='block text-bold text-sm text-body sm:text-center'>
            © 2026{" "}
            <Link to='#' className='hover:underline text-bold'>
              Eri Tri Haryanto
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
}