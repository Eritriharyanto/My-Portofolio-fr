import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className='bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4'>
        <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <Link
              to='https://flowbite.com/'
              className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
            >
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='h-7'
                alt='Flowbite Logo'
              />
              <span className='text-heading self-center text-2xl font-semibold whitespace-nowrap'>
                Flowbite
              </span>
            </Link>
            <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0'>
              <li>
                <Link to='#' className='hover:underline me-4 md:me-6'>
                  About
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline me-4 md:me-6'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline me-4 md:me-6'>
                  Licensing
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-default sm:mx-auto lg:my-8' />
          <span className='block text-sm text-body sm:text-center'>
            © 2023{" "}
            <Link to='https://flowbite.com/' className='hover:underline'>
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
}