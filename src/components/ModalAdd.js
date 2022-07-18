import React from 'react'
import './styles/ModalAdd.css'
import { RiCloseLine } from 'react-icons/ri'

const ModalAdd = ({ setIsModalOpen }) => {
  return (
    <>
        <div 
            className='darkBG' 
            onClick={() => setIsModalOpen(false)}
        />
        <div className='centered'>
            <div className='modal'>
                <div className='modalHeader'>
                    <h5 className='heading'>Add Product</h5>
                </div>
                <button className='closeBtn' onClick={() => setIsModalOpen(false)}>
                    <RiCloseLine style={{ marginBottom: '-3px' }} />
                </button>
                <div className='modalContent'>
                <form className='modalContent__form'>
                    <label>
                        <p>Name of Product</p>
                        <input name="name" />
                    </label>
                    <label>
                        <p>Description</p>
                        <input name="name" />
                    </label>
                    <label>
                        <p>Picture</p>
                        <input name="name" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                </div>
                <div className='modalActions'>
                    <div className='actionsContainer'>
                        <button className='deleteBtn' onClick={() => setIsModalOpen(false)}>
                            Add Product
                        </button>
                        <button
                            className='cancelBtn'
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalAdd