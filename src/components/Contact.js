import React from "react";

const Contact=()=>{
   return (
      <div name="contact" className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4">
         <form method="POST" action="https://getform.io/f/5bbf65a2-c626-4a83-bc0a-6e7cb0e1932a" className="flex flex-col max-w-[600px] w-full ">
             <div className="pb-8">
               <p className="text-4xl inline font-bold border-b-6 border-pink-600 text-gray-300">Contact form:</p>
               <p className="text-gray-300 py-4">Submit your queries here:</p>
             </div>
             <input 
                name="name" 
                type="text"
                placeholder="Your name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
             />
             <input
                type="text"
                name="email"
                placeholder="Your email"
                className="mt-6 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
             />
             <textarea
                name="message"
                placeholder="Your message"
                className="mt-6 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                rows={10}             
             />
             <input
                type="submit"
                className="px-6 py-2 mt-6 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                value="Submit"
             />
         </form>
      </div>
   )
}

export default Contact;