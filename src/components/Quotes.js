import React from 'react'
import { AiOutlineRise } from 'react-icons/ai'

function Quotes() {
    return (
        <div className='bg-building bg-cover bg-center w-[97%] h-[65vh] mx-auto rounded-2xl mt-[8rem]'>
            <div className='flex flex-col'>
                <div className='mx-14 my-14'>
                    <h1 className='text-white text-[22px] lg:text-[40px] leading-tight font-primary mb-8'>The story of the world-famous BMW<br />Headquarters in Munich is one of<br />
                        innovative spirit, architectural vision,<br />and new ideas in times of great change
                    </h1>
                    <button className='btn bg-white text-black text-sm px-2 py-2 flex flex-row gap-x-4 items-center my-2 font-primary'>
                        LEARN MORE
                        <AiOutlineRise />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quotes
