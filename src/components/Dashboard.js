import React, { useState } from 'react'
import "./styles/Dashboard.css"

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState()

    const handleChange = e => {
        e.preventDefault()
        setSearchTerm(e.target.value)
        console.log(searchTerm);
    }

  return (
    <div className='dashboard__container'>
      <div>
        <input
        id="search"
        type="text"
        placeholder='search items...'
        value={searchTerm}
        onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Dashboard