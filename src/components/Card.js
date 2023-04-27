import React from 'react'
import {FaQuoteLeft} from "react-icons/fa";
import {FaQuoteRight} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";
import {FaChevronLeft} from "react-icons/fa";

const Card = ({data, rightHandler, leftHandler, surpriseHandler}) => {
  return (
    <div className='flex flex-col relative justify-center items-center w-[700px] bg-white rounded-md
     p-[3rem] pt-[4rem] mt-4 hover:shadow-xl transition-all duration-700'>
        <div className='w-[130px] h-[130px] bg-purple-400 rounded-full absolute left-[1.1rem] top-[-69px]'></div>
        <div><img src={data.image} alt="" className=' h-[130px] rounded-full absolute left-4 top-[-65px]'></img></div>
        <h2 className='font-bold text-2xl'>{data.name}</h2>
        <p className=' opacity-[0.3] text-sm'>{data.job.toUpperCase()}</p>

        {/* left quote icon */}
        <FaQuoteLeft className=' my-6 text-purple-400'></FaQuoteLeft>
        <p className=' text-center text-slate-500'>{data.text}</p>
        <FaQuoteRight className=' my-6 text-purple-400'></FaQuoteRight>
        {/* right quote icon */}

        <div className='flex gap-6 my-4 text-purple-400 text-2xl'>
            <FaChevronLeft onClick={leftHandler} className=' cursor-pointer hover:text-purple-600'></FaChevronLeft>
            {/* left slider icon */}
            <FaChevronRight onClick={rightHandler} className=' cursor-pointer hover:text-purple-600'></FaChevronRight>
            {/* right slider icon */}

        </div>
        <button onClick={surpriseHandler} className=' bg-purple-400 text-white text-lg font-semibold p-2 px-8 rounded-md hover:bg-purple-600 mt-4'>Surprise Me</button>

    </div>
  )
}
export default Card;