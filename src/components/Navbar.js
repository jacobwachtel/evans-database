import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalAdd from './ModalForm'
import './styles/Navbar.css'

import { modalOpen } from '../redux/tools/modalSlice'

const Navbar = () => {

  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalOpen)
  console.log(isModalOpen)

  return (
    <div>
        <nav className='nav'>
            <ul className='nav__list'>
                <a 
                  href='#' 
                  className='primaryBtn'
                  onClick={() => dispatch(modalOpen(true))}
                >Add Item</a>
                {isModalOpen && 
                  <ModalAdd
                 
                  /> 
                  
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar