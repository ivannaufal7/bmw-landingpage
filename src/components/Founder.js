import React, { useState } from 'react'
import IconLeft from './IconLeft'
import IconRight from './IconRight'
import CEO from '../assets/img/ceo.jpg'

function Founder() {
    const quotes = [
        {
            quote: "BMW is the world's leading manufacturer of premium automobiles and motorcycles, and provider of premium financial and mobility services.",
            author: "Ronald Reygan",
            images: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Founder"
        },
        {
            quote: "A mistake that makes you humble is better than an achievement that makes you arrogant",
            author: "Ivan Naufal",
            images: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
            title: "Co-founder"
        },
        {
            quote: "Give a man a BMW sports car, he will be happy of the entire life",
            author: "Yoru Yakuza",
            images: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            title: "Co-founder"
        },
    ]

    const [currentQuote, setCurrentQuote] = useState(0)

    const handlePrevClick = () => {
        setCurrentQuote(currentQuote === 0 ? quotes.length - 1 : currentQuote - 1)
    }
    const handleNextClick = () => {
        setCurrentQuote(currentQuote === quotes.length - 1 ? 0 : currentQuote + 1)
    }
    return (
        <div className='w-full px-4 lg:px-8 my-[6rem]'>
            <div className='flex flex-col-reverse gap-y-4 lg:flex-row justify-between'>
                <div className='flex flex-row gap-x-2'>
                    <div onClick={handlePrevClick} className='cursor-pointer'>
                        <IconLeft />
                    </div>
                    <div onClick={handleNextClick} className='cursor-pointer'>
                        <IconRight />
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <h1 className='font-primary font-bold text-[32px] lg:text-[42px] max-w-[900px] leading-tight'>
                        {quotes[currentQuote].quote}
                    </h1>
                    <div className='flex flex-row items-center gap-x-4'>
                        <img className="rounded-full h-16 w-16 object-cover" src={quotes[currentQuote].images} alt="My Image" />
                        <div>
                            <h2 className='font-primary font-bold'>{quotes[currentQuote].author}</h2>
                            <p className='font-primary text-grey'>{quotes[currentQuote].title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder
