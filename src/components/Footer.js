import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-black-100 w-full mx-auto px-8 py-8 mt-24'>
            <div className=''>
                <div className='flex flex-col gap-y-12 lg:flex-row lg:gap-x-32 justify-center font-primary'>
                    <div className='flex flex-col gap-y-4'>
                        <span className='text-grey'>Quick links</span>
                        <ul className='text-white'>
                            <li className='mb-2'>Home</li>
                            <li className='mb-2'>BMW in your country</li>
                            <li className='mb-2'>Careers</li>
                            <li className='mb-2'>Software Update</li>
                            <li className='mb-2'>Accessories Update</li>
                            <li className='mb-2'>Autonomous Driving</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <span className='text-grey'>Blog</span>
                        <ul className='text-white'>
                            <li className='mb-2'>Automotive Life</li>
                            <li className='mb-2'>Design</li>
                            <li className='mb-2'>Innovation</li>
                            <li className='mb-2'>Performance</li>
                            <li className='mb-2'>Sustainability</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <span className='text-grey'>Events</span>
                        <ul className='text-white'>
                            <li className='mb-2'>CES 2023</li>
                            <li className='mb-2'>The epic journey</li>
                            <li className='mb-2'>The iX1 Metaverse Experience</li>
                            <li className='mb-2'>IAA Mobility 2023 Hub</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <span className='text-grey'>BMW.com</span>
                        <ul className='text-white'>
                            <li className='mb-2'>About BMW.com</li>
                            <li className='mb-2'>Contact</li>
                            <li className='mb-2'>Cookies</li>
                            <li className='mb-2'>Imprint</li>
                            <li className='mb-2'>Legal Notice/Data protection</li>
                        </ul>
                    </div>
                </div>
                <div class='border-b-2 border-grey mt-8'>
                </div>
                <div className='flex flex-row justify-between mt-4 font-primary'>
                    <p className='text-grey'>&copy; BMW AG 2023</p>
                    <div className='text-white flex flex-row gap-x-4 text-2xl'>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
