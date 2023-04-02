import React from 'react'
import { FaSearch, FaHamburger } from 'react-icons/fa'
import Logo from '../assets/img/bmw.png'

function Navbar() {
    return (
        <nav className='w-full'>
            <div className='mx-auto my-8 px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <img src={Logo} alt='' className='max-w-[40px] max-h-[40px]'/>
                    </div>
                    <div>
                        <ul className='flex flex-row gap-x-12'>
                            <li className='text-black-100'>
                                <a href='' className='font-primary'>Models</a>
                            </li>
                            <li className='text-black-100'>
                                <a href='' className='font-primary'>Blog</a>
                            </li>
                            <li className='text-black-100'>
                                <a href='' className='font-primary'>Events</a>
                            </li>
                            <li className='text-black-100'>
                                <a href='' className='font-primary'>BMW in your country</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-row items-center gap-x-4'>
                        <FaSearch className='text-black-100'/>
                        <a href='' className='text-black-100 font-primary'>Search</a>
                    </div>
                    <div>
                        <FaHamburger/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
