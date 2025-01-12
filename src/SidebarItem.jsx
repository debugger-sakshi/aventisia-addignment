import React from 'react'

const SidebarItem = ({icon, text, active , alert}) => {
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
        ${
            active 
            ? "bg-indigo-950"
            : "hover:bg-indigo-50 text-gray-50"
        }
    `}>
        {icon}
        <span className={`w-32 ml-3  ${
            active 
            ? "text-white"
            : "hover:bg-indigo-50 text-black"
        }`}>{text}</span>
    </li>
  )
}

export default SidebarItem
