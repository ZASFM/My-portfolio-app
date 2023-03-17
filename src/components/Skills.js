import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png'
import Jest from '../assets/jest.png'
import PSQL from '../assets/psql.png'
import react from '../assets/react.png'
import Git from '../assets/git.png'
import Node from '../assets/node.png'
import Docker from '../assets/docker.png';
import gql from '../assets/graphql.webp';

const Skills=()=>{
   return (
      <div name="skills" className='w-full h-full bg-[#0a192f] text-gray-300'>
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
               <p className='text-4xl inline font-bold border-b-4 border-pink-600'>Skills</p>
               <p className='py-3'>Technologies I have worked with </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>
                  <img className='w-full h-[75%]' src={HTML} alt="html"/>
                  <p className='my-4'>HTML</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={CSS} alt="html"/>
                  <p className='my-4'>CSS +SCSS</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={JavaScript} alt="html"/>
                  <p className='my-4'>Javascript + TypeScript</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={react} alt="html"/>
                  <p className='my-4'>React</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={Node} alt="html"/>
                  <p className='my-4'>Node + Express </p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={gql} alt="html"/>
                  <p className='my-4'>GraphQL </p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={Jest} alt="html"/>
                  <p className='my-4'>Jest + React test-library</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={PSQL} alt="html"/>
                  <p className='my-4'>PSQL + MongoDB</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={Git} alt="html"/>
                  <p className='my-4'>Git + Github</p>
               </div>
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 h-[200px] m-[20px]'>                  <img className='w-full h-[75%]' src={Docker} alt="html"/>
                  <p className='my-4'>Docker</p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Skills;