import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { modalOpen, sliceOfModal } from '../redux/tools/modalSlice'
import ModalForm from './ModalForm'
import Dashboard from './Dashboard'
import logoImage from '../images/logo-color.png'

const Navbar = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);
  
// mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8

  return (
    <div className=''>
      <nav className='flex  justify-between py-8 mx-auto max-w-7xl px-4 sm:px-6 lg:-px-8 relative'>
        <div className='flex items-center justify-center'>
          <div className=''>
            <img className='w-28' src={logoImage} alt='Tool Tracker company name and image of wrench - logo'></img>
          </div>
          <ul className='ml-10 flex items-center'>
            <li>
              <a 
                href='#' 
                className='rounded-lg px-3 py-2 text-base hover:bg-slate-100 text-grey-700 hover:font-medium transition-colors delay-150 hover:text-gray-900 hover:delay-0'
              >Home</a>
            </li>
            <li>
              <a 
                href='#' 
                className='rounded-lg px-3 py-2 text-base hover:bg-slate-100 text-grey-700 hover:font-medium transition-colors delay-150 hover:text-gray-900 hover:delay-0'
              >Your Tools</a>
            </li>
            <li>
              <a 
                href='#' 
                className='rounded-lg px-3 py-2 text-base hover:bg-slate-100 text-grey-700 hover:font-medium transition-colors delay-150 hover:text-gray-900 hover:delay-0'
              >"TEST"</a>
            </li>
            <li>
              <a 
                href='#' 
                className='rounded-lg px-3 py-2 text-base hover:bg-slate-100 text-grey-700 hover:font-medium transition-colors delay-150 hover:text-gray-900 hover:delay-0'
              >"TEST"</a>
            </li>
          </ul>
        </div>
        <div>
          <button className='text-black px-5 py-2 rounded-full text-base pr-8 hover:font-medium hover:underline'>Sign In</button>
          <button className='bg-black text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-slate-800 transition ease-in-out'>New Tool</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar