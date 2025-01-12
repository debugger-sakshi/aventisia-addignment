import React from 'react'

const DropDown = ({name,text,placeholder,onChange, modelType}) => {
   
    return (
        <div className='mt-4'>
            <label for="price" className="block text-sm/6 font-medium text-gray-900">{text}</label>

            <div className="grid shrink-0 grid-cols-1 flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <select id="currency" 
                name="currency" 
                aria-label="Currency" 
                placeholder={placeholder}
                onChange={(e) => onChange(name, e.target.value)}
                className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                    <option disabled selected>Select</option>
                    {
                        modelType.map(ele => (
                            <option value={ele}>{ele}</option>
                        ))
                    }


                </select>
                <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </div>

        </div>


    )
}

export default DropDown
