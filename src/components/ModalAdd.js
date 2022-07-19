import React from 'react'
import './styles/ModalAdd.css'
import { RiCloseLine } from 'react-icons/ri'

const ModalAdd = ({ formState, setFormState, setIsModalOpen, setName, name, setDescription, description, setPicture, picture }) => {

    const handleChange = (e) => {
        // e.preventdefault()
        let value = e.target.value
        setFormState({
            ...formState,
            [e.target.name]: value
        })
        
    }

    const handleSubmit = () => {
        const postURL = 'http://localhost:3000/api/v1/tools';
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formState
            })
        })
        .then(() => {
            alert('You have added a tool to the system!');
        })
    }

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
                <form className='modalContent__form' onSubmit={handleSubmit}>
                    <label>
                        <p>Name of Product</p>
                        <input 
                        name="name"
                        type='text'
                        value={formState.name}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Description</p>
                        <input 
                        name="description"
                        type='text'
                        value={formState.description}
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p>Picture</p>
                        <input name="picture" />
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