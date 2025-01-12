import React, { useState } from 'react'
import Cross from './assets/images/Outline-x.png'
import TextInputField from './TextInputField'
import DropDown from './DropDown'
import TextInputAreaField from './TextInputAreaField'
const modelType = [
  "Extraction",
  "Non-Extraction",
]
const modelLLM = [
  "Netural",
  "Regression",
  "Classification"
]
const Modal = ({show, setShow}) => {
  const [formData, setFormData] = useState({
    name:'',
    type:'',
    llm:'',
    description:''
  })
  const handlerChange = (name, value) => {
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  return (
    <div className='h-screen w-screen p-10 absolute top-0 backdrop-brightness-50 flex justify-center items-center'>
        <div className='bg-white h-3/5 w-2/5 rounded-md'>
        <div className='border-b-2 border-gray-100 p-4'>

          <div className="h-5 flex justify-between items-center ">
            <p className='text-sm'>Create new model</p>
            <p className='cursor-pointer' onClick={()=> setShow(false)}><img src={Cross} alt="cross" className='size-5' /></p>
          </div>
        </div>
        <div className='px-4'>
        <TextInputField 
        name={"name"}
        text={"Model Type"} 
        placeholder={"Enter model type"} 
        value={formData?.name} 
        onChange={(name, value) => handlerChange(name, value)} 
        />
        <DropDown 
        text={"Model Type"} 
        name={"type"}
        placeholder={"Enter model type"} 
        modelType={modelType}
        value={formData?.type}
        onChange={(name, value) => handlerChange(name, value)} 
         />
        <DropDown 
        text={"LLM"} 
        name={"llm"}
        placeholder={"Netural (recommended)"} 
        modelType={modelLLM}
        value={formData?.llm}
        onChange={(name, value) => handlerChange(name, value)} 
         />
        
        <TextInputAreaField
        name={"description"}
        text={"Model Description"}
        placeholder={"Enter Model Description"}
        onChange={(name, value) => handlerChange(name, value)} 
        />
        <div className="flex gap-2 w-full mt-4">
         
          <button 
          className='bg-indigo-200 w-1/2 py-2 rounded-md text-xs text-indigo-600'
          onClick={()=> {
            setShow(false)
            setFormData({})
            console.log(formData)
          }}
          >Cancel</button>
          <button 
          className='bg-indigo-600 w-1/2 py-2 text-white rounded-md text-xs'
          onClick={()=> {
            console.log(formData)
          }}
          >Save</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Modal
