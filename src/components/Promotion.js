import React from 'react'
import Apple from '../assets/img/apple.svg'
import Google from '../assets/img/google.svg'

const Promotion = () => {
    return (
        <div className='bg-car2 bg-cover bg-center w-[97%] h-[65vh] mx-auto rounded-2xl mt-[8rem]'>
            <div className='flex flex-col'>
                <div className='mx-14 mt-[15vh] lg:mt-[10vh]'>
                    <h1 className='text-white text-[22px] lg:text-[38px] leading-tight font-primary max-w-[700px]'>
                        The My BMW app is the universal interface to your vehicle and to all other
                        BMW products and services. Also, theapp keeps you up to date on the status of the vehicle at all times
                    </h1>
                    <div className='flex flex-row gap-x-2 relative bottom-6 lg:bottom-8'>
                        <img src={Apple} alt='' className='max-w-[120px] max-h-[120px] lg:max-w-[180px] lg:max-h-[180px] '/>
                        <img src={Google} alt='' className='max-w-[120px] max-h-[120px] lg:max-w-[180px] lg:max-h-[180px]'/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotion
