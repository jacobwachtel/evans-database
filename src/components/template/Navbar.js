import React from 'react'
import ModalAdd from './ModalAdd'
import '../../assets/styles/Navbar.css'

const Navbar = ({ formState, setFormState, setIsModalOpen, isModalOpen, name, setName, description, setDescription, image , setImage }) => {
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
                  formState={formState}
                  setFormState={setFormState}
                  setIsModalOpen={setIsModalOpen} 
                  name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  image={image}
                  setImage={setImage}
                  /> 
                  
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar