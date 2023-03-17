import React from 'react';
import background from '../assets/backg.jpg';

const Work=()=>{
   return (
      <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl inline font-bold border-b-4 border-pink-600'>My work</p>
               <p className='py-6'>Check some of my projects:</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               <div style={{backgroundImage:`url(${background})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold  text-white tracking-wider'>
                        Communicate
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO (soon)</button>
                        </a>
                        <a href="https://github.com/ZASFM/communicate" target="_blank" rel="noreferrer">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
               <div style={{backgroundImage:`url(${background})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold  text-white tracking-wider'>
                        Helper-project
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO (unavailable)</button>
                        </a>
                        <a href="https://github.com/devmunro/helper-project" target="_blank" rel="noreferrer">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
               <div style={{backgroundImage:`url(${background})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold  text-white tracking-wider'>
                        Food app
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO (soon)</button>
                        </a>
                        <a href="https://github.com/ZASFM/Mern-food-app" target="_blank" rel="noreferrer">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
               <div style={{backgroundImage:`url(${background})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold  text-white tracking-wider'>
                        GraphQL management app
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="/">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO (unavailable)</button>
                        </a>
                        <a href="https://github.com/ZASFM/content-manager" target="_blank" rel="noreferrer">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Work;