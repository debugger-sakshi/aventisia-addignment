import React, { useEffect, useMemo, useState } from 'react'
import Search from './assets/images/Search1.png';
import Filter from './assets/images/Filter.png';
import Calender from './assets/images/calender.png';
import Table from './Table';
import { column } from './column';
import {modelData} from './model_data.js'
import Modal from './Modal.jsx';
const Main = ({setShowModal}) => {
  let timer = null
  const [searchval, setSearchval] = useState()
  const data1 = useMemo(()=> modelData, [])
  const [data, setData] = useState([])
  const handlerSearch = (val)=>{
    setSearchval(val)
      if(timer) timer = null
      timer = setTimeout(()=>{
        setData(prev => {
          if(searchval == "") return modelData
          return prev.filter(ele => ele.id.includes(val) || ele.model_name.toLowerCase().includes(val.toLowerCase()))
        })
      },100)
  }
  useEffect(()=>{
    setData(data1)
  },[])
  return (
    <section className='h-[calc(100%-5rem)]  p-5 bg-gray-50 overflow-hidden'>
      <div className='h-full w-full shadow-md bg-white py-5 px-4 overflow-auto'>
        <div className='flex justify-between items-center '>
          <h3>Model Library</h3>
          <button
           className='p-2 px-4 bg-indigo-600 text-white rounded-md text-xs'
           onClick={()=> setShowModal(true)}
           >+ Create New Model </button>
        </div>
        <div className='grid grid-cols-10 gap-3 h-10 mt-4'>
          <div className='col-span-7 search relative p-2'>
            <img src={Search} alt="search" className='size-5 absolute' />
            <input 
            className='w-full h-full search ps-7 text-sm' 
            placeholder='Search by Name, ID'
            value={searchval}
            onChange={(e)=> handlerSearch(e.target.value)}
             />
          </div>
          <div className='search col-span-1 px-4'>
            <img className='size-7 ' src={Filter} alt="filter" />
            <span>Filter</span>
          </div>
          <div className='search  col-span-2 px-6'>
          <img className='size-7' src={Calender} alt="calender" />
          <span>Apr 11 - Apr 12</span>
          </div>
        </div>
       
          <Table
           tableData={data}
           column={column}
            />
      
      </div>
      
    </section>
  )
}

export default Main
