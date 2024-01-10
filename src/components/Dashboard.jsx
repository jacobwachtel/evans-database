import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTools, selectAllTools } from '../redux/tools/toolSlice'

const Dashboard = ({ searchQuery, setSearchQuery }) => {
    
    

    // const dispatch = useDispatch();
    const tools = useSelector(selectAllTools)
    // const toolStatus = useSelector(selectToolStatus);

     const handleInputChange = e => {
      
      e.preventDefault();
      const searchTerm = e.target.value;
      setSearchQuery(searchTerm);

      // const filteredItems = tools.filter((tool) => {
      //   tool.name.toLowerCase().includes(searchItem.toLowerCase())
      // });

      // setFilteredTools(filteredItems)
    }

    // const handleChange = e => {
    //     e.preventDefault()
    //     setSearchTerm(e.target.value)
    //     console.log(searchTerm);
    // }

  return (
    <div className='py-32 flex justify-center items-center'>
      <div>
        <h3 className='mb-5 font-medium text-xl '>Search for your tools here:</h3>
        <label className='relative block'>
          <input
          className='w-full bg-slate-100 border rounded-md placeholder:italic placeholder:text-slate-500'
          id="search"
          type="text"
          placeholder='search items...'
          value={searchQuery}
          onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  )
}

export default Dashboard