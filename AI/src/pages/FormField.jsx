import React from 'react'

const Fields = ({labelname,type,name,placeholder,value,handlechange,issurpriseme,handlesuprise}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor={name}
        className='block text-sm font-medium text-gray-900'>{labelname}</label><br></br>
        {issurpriseme&&(<button type='button' onClick={handlesuprise} className='font-semibold text-xs   bg-[#b441d780] px-2 py-1  rounded-[10px] text-[#1c1a1a92]'>
           Boost up</button>)}

      </div>
      <input type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handlechange}
      required
      className='bg-gray-100 border-spacing-0 border-gray-300 text-gray-900 text-sm rounder-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'/>
    </div>
  )
}

export default Fields