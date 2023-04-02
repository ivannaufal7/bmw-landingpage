import React from 'react'
import { AiOutlineRise } from 'react-icons/ai'

function Podcast() {
    return (
        <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 my-[40px]'>
            <div className='flex flex-col'>
                <h1 className='text-3xl lg:text-[42px] font-primary font-bold leading-normal my-8'>The BMW podcast:<br />
                    changing lanes</h1>
                <div className='flex flex-col lg:flex-row my-8'>
                    <div className='flex flex-1 mb-4'>
                        <p className='bg-grey-100 text-black-100 px-4 py-1 h-[32px] rounded-lg font-primary'>Design</p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <span className='font-primary font-bold text-[24px] min-w-[300px] lg:text-2xl lg:w-[500px]'>#69 A real game changer: the BMW Neue Klasse</span>
                        <button className='btn bg-white text-black text-sm py-2 flex flex-row gap-x-4 items-center my-2 font-primary'>
                            LEARN MORE
                            <AiOutlineRise />
                        </button>
                    </div>
                    <span className='text-grey text-sm'>21 March, 2023</span>
                </div>
                <div class='border-b-2 border-grey'>
                </div>

                <div className='flex flex-col lg:flex-row my-8'>
                    <div className='flex flex-1 mb-4'>
                        <p className='bg-grey-100 text-black-100 px-4 py-1 h-[32px] rounded-lg font-primary'>
                            Automotive life
                        </p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <span className='font-primary font-bold text-[24px] min-w-[300px] lg:text-2xl lg:w-[500px]'>
                            #067 The funniest and most emotional exploits of BMW drivers</span>
                        <button className='btn bg-white text-black text-sm py-2 flex flex-row gap-x-4 items-center my-2 font-primary'>
                            LEARN MORE
                            <AiOutlineRise />
                        </button>
                    </div>
                    <span className='text-grey text-sm'>21 March, 2023</span>
                </div>
                <div class='border-b-2 border-grey'>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row my-8'>
                    <div className='flex flex-1 mb-4'>
                        <p className='bg-grey-100 text-black-100 px-4 py-1 h-[32px] rounded-lg font-primary'>
                            Performance
                        </p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <span className='font-primary font-bold text-[24px] min-w-[300px] lg:text-2xl lg:w-[500px]'>
                            #048 Classic BMW racing cars challenge</span>
                        <button className='btn bg-white text-black text-sm py-2 flex flex-row gap-x-4 items-center my-2 font-primary'>
                            LEARN MORE
                            <AiOutlineRise />
                        </button>
                    </div>
                    <span className='text-grey text-sm'>21 March, 2023</span>
                </div>
                <div class='border-b-2 border-grey'>
                </div>

                <div className='flex flex-col lg:flex-row my-8'>
                    <div className='flex flex-1 mb-4'>
                        <p className='bg-grey-100 text-black-100 px-4 py-1 h-[32px] rounded-lg font-primary'>
                            Design
                        </p>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <span className='font-primary font-bold text-[24px] min-w-[300px] lg:text-2xl lg:w-[500px]'>
                            #057 BMW Design elements explained - by a BMW designer</span>
                        <button className='btn bg-white text-black text-sm py-2 flex flex-row gap-x-4 items-center my-2 font-primary'>
                            LEARN MORE
                            <AiOutlineRise />
                        </button>
                    </div>
                    <span className='text-grey text-sm'>21 March, 2023</span>
                </div>
                <div class='border-b-2 border-grey'>
                </div>

        </div>
    )
}

export default Podcast