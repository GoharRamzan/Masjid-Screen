import React, { useEffect, useState } from 'react'
import allah from '../assets/Allah.png'
import muhammad from '../assets/muhammad.png'
const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(timer);
    }, []);
    const mosqueName = localStorage.getItem("mosque Name")
    const mosqueArea = localStorage.getItem("mosque Area")
    return (
        <div className='h-full w-full flex flex-col justify-center items-center space-y-4 border-b-2 '>
            <div className=' flex justify-around items-center '>
            <img src={muhammad} className='w-16 md:w-24 xl:w-40 2xl:w-44' alt="" />
            <h1 className='text-lg md:text-3xl xl:text-4xl 2xl:text-6xl font-bold font-serif'>لَا إِلَٰهَ إِلَّا ٱللَّٰهُ مُحَمَّدٌ رَسُولُ ٱللَّٰهِ</h1>
            <img src={allah} className='w-16 md:w-24 xl:w-40 2xl:w-44' alt="" />
            
            </div>
            <div className='border-2 border-[#856b47]   w-2/4 text-center rounded-2xl text-lg xl:text-2xl xl:p-4  bg-[#ecc58f]'>{currentTime}</div>
            <div className='flex gap-2 mb-5' >
                <span className='text-2xl font-bold '>{mosqueName}</span>
                <span className='text-2xl font-bold '>({mosqueArea})</span>
            </div>
            

        </div>
    )
}

export default Header