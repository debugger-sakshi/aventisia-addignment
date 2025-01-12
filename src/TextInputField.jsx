import React from 'react'

const TextInputField = ({name,text, placeholder, value, onChange}) => {
  return (
    <div className='mt-4'>
    <label for="price" className="block text-xs font-sm text-gray-900">{text}</label>
    <div className="mt-1">
      <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
       
        <input type="text" name="price" id="price" 
        className="block min-w-0 grow py-2 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-xs" 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
         />
        
      </div>
    </div>
  </div>
  )
}

export default TextInputField
