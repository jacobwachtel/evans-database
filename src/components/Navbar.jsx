import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { modalOpen, sliceOfModal } from '../redux/tools/modalSlice'
import ModalForm from './ModalForm'
import Dashboard from './Dashboard'

const Navbar = () => {

  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);


  return (
    <div className='top-0 h-32 py-16 px-6 flex justify-between items-center w-screen mx-auto border-b-orange-400'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
            <ul className='flex items-center gap-[4vw] text-2xl'>
              <li>
                <a 
                  href='#' 
                  className='rounded-lg px-3 py-2 text-2xl hover:bg-slate-100 text-slate-900 hover:font-medium'
                >Home</a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='rounded-lg px-3 py-2 text-2xl hover:bg-slate-100 text-slate-900 hover:font-medium'
                >Your Tools</a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='rounded-lg px-3 py-2 text-2xl hover:bg-slate-100 text-slate-900 hover:font-medium'
                >"TEST"</a>
              </li>
              <li>
                <a 
                  href='#' 
                  className='rounded-lg px-3 py-2 text-2xl hover:bg-slate-100 text-slate-900 hover:font-medium'
                >"TEST"</a>
              </li>
            </ul>
            <div>
              <button className='text-black px-5 py-2 rounded-full text-2xl pr-8 hover:font-medium hover:underline'>Sign In</button>
              <button className='bg-emerald-400 text-black px-6 py-3 rounded-full text-3xl hover:font-medium'>New Tool</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar