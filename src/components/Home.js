import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home=()=>{
   return (
      <div name="home" className='w-full h-screen bg-[#0a192f]'>
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className="text-pink-600">Hi, Im </p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mohammad Shafi</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Im a full-stack web developer.</h2>
            <p className="text-[#8892b0] py-4 max-w-[700px] ">
               Im a junior full-stack web developer with a lot of ambition and desire to put my skills into practice,
               and keep learning in this field that I much adore.
            </p>
            <div>
               <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 ">Learn more 
                  <span className="group-hover:rotate-90 duration-300">
                     <HiArrowNarrowRight className="ml-4"/>
                  </span>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Home;