import React from 'react'
import ModalAdd from './ModalAdd'
import './styles/Navbar.css'

const Navbar = ({ setIsModalOpen, isModalOpen, name, setName, description, setDescription, picture, setPicture }) => {
  return (
    <div>
        <nav className='nav'>
            <ul className='nav__list'>
                <a 
                  href='#' 
                  className='primaryBtn'
                  onClick={() => setIsModalOpen(true)}
                >Add Item</a>
                {isModalOpen && 
                  <ModalAdd 
                  setIsModalOpen={setIsModalOpen} 
                  name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  picture={picture}
                  setPicture={setPicture}
                  /> 
                  
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar