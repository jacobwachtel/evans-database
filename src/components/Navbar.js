import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ModalAdd from './ModalForm'
import './styles/Navbar.css'

import { modalOpen, sliceOfModal } from '../redux/tools/modalSlice'

const Navbar = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);


  return (
    <div>
        <nav className='nav'>
            <ul className='nav__list'>
                <a 
                  href='#' 
                  className='primaryBtn'
                  onClick={() => dispatch(modalOpen(false))}
                >Add Item</a>
                {isOpen && <ModalAdd/> }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar