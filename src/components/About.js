import React from 'react'
import { AiOutlineRise } from 'react-icons/ai'

function About() {
    return (
        <div className='w-full mx-auto flex flex-col gap-y-8 lg:flex-row my-[120px] px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-1 min-w-[500px] text-3xl lg:text-[42px] font-primary font-bold'>
                <h1>About us</h1>
            </div>
            <div className='flex flex-col'>
                <span className='font-primary text-blue text-sm mb-8'>THE SPECIAL FASCINATION OF THE BMW GROUP</span>
                <h1 className='font-primary font-bold text-[32px] lg:text-[48px] leading-tight mb-8'>The special fascination of the BMW Group not only lies in its products and technology,
                    but also in the company's history, written by inventors, pioneers and designers.
                </h1>
                <div className='flex flex-col gap-y-4 mb-8 lg:flex-row lg:text-lg lg:max-w-[1200px] font-primary'>
                    <p className='mr-8'>Today, the BMW Group, with its 31 production and assembly facilities in 15 countries as well
                        as a global sales network, is the world's leading manufacturer of premium automobiles and motorcycles,
                        and provider of premium financial and mobility services.
                    </p>
                    <p>
                        The BMW Group sets trends in production technology and sustainability as an innovation leader
                        with an intelligent material mix, a technological shift towards digitalisation and resource-efficient
                        production
                    </p>
                </div>
                <div>
                    <button className='btn bg-black text-white text-sm px-4 py-2 flex flex-row gap-x-4 items-center'>
                        LEARN MORE
                        <AiOutlineRise />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About