import React from 'react'
import Bell from './assets/images/bell.png'
import Love from './assets/images/love.png'
import Arrow from './assets/images/arrow.png';
import Search from './assets/images/search.png';
import Command from './assets/images/Command.png';
const Navbar = () => {
  return (
    <header className='w-full h-20 border-b shadow-sm flex justify-between items-center px-6'>
      <div className=""><span>Al/ML Model Builder</span></div>
      {/* <div className="">
        <input className={`bg-indigo-100 p-2 w-56 outline-0 rounded-sm border-0
             
              `} type='search' placeholder='search' />
      </div> */}
      <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 bg-indigo-100 w-56">
      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 bg-indigo-100">
      <img className='size-5' src={Search} alt="search" /></div>
      <input 
      type="text" 
      name="price" 
      id="price" 
      className="block rounded-md bg-indigo-100 min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" 
      placeholder="Search" />
     <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6 bg-indigo-100">
     <img className='w-6 me-3' src={Command} alt="search" /></div>
    </div>
      <div className="flex items-end w-32 ml-5">
        <span className='rounded-full border-2 border-grey-50 w-10 h-10 p-1 bg-white me-2 flex justify-center items-center relative' ><img className='w-6 ' src={Bell} alt="bell" />
        <div className='h-3 w-3 rounded-full text-white bg-yellow-700 text-[8px] absolute flex items-center justify-center left-6 top-0'>2</div>
        </span >
        <span className='rounded-full border-2 border-grey-50 w-10 h-10 p-1 bg-white me-2 flex justify-center items-center'><img className='w-6 ' src={Love} alt='love' /></span>
      </div>

      <div className='flex  p-2 items-center'>
        <div className='border-l-2 w-2 h-10 m-4'></div>
        <div className=' rounded-full w-10 h-10 p-1 bg-gray-300 me-2 '>

        </div>

        <div className='flex flex-col'>
          <span className='text-xs mb-0'>Sakshi Rawat</span>
          <span className='text-xs'>sakshurawat786@gmail.com</span>
        </div>
        <div className='w-3 mx-4'><img alt='arrow' src={Arrow} /></div>
      </div>

    </header>
  )
}

export default Navbar
