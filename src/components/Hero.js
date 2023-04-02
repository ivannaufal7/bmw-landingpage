import React from 'react'
import Navbar from './Navbar'
import { AiOutlineRise } from 'react-icons/ai'

function Hero() {
    return (
        <div className='w-full overflow-hidden'>
            <Navbar />
            <div className='py-[40px] lg:py-[64px]'>
                <div className='flex flex-col items-center justify-center gap-y-8'>
                    <div className='flex flex-col text-center gap-y-2'>
                        <span className='font-primary text-blue text-sm'>DRIVEN BY YOUR CHEERS</span>
                        <h1 className='font-bold font-primary text-black text-[40px] lg:text-[56px]'>The down of an electric era</h1>
                        <p className='font-primary mx-1'>The story of the BMW 1062 Electric carries an inspiring message<br />
                            through time: Great change begins with a small step.</p>
                    </div>
                    <button className='btn bg-black text-white px-6 py-2 flex flex-row gap-x-4 items-center'>
                        LEARN MORE
                        <AiOutlineRise />
                    </button>
                </div>
            </div>
            <div className='bg-car bg-cover bg-center h-[800px]'>
            </div>
        </div >
    )
}

export default Hero
