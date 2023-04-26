import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './styles/ModalAdd.css'
import { RiCloseLine } from 'react-icons/ri'
import FormikForm from './FormikForm';
import {  } from '../redux/tools/modalSlice';
import { modalClosed } from '../redux/tools/modalSlice'



const ModalAdd = ({ }) => {

    const dispatch = useDispatch()
    
    

    // const fileUploader = ({}) formState, setFormState, setIsModalOpen, setName, name, setDescription, description, setImage, image

    // const fileInput = React.useRef(null);


    // const handleChange = (e) => {
    //     // e.preventdefault()
    //     let value;
    //     let name = e.target.name;
    //     let type = e.target.type;
    //     if(type === 'text') {
    //         value = e.target.value;
    //     }
    //     else if (type === 'file') {
    //         value = e.target.files[0]
    //     }
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     })
    //     // console.log(formState); 
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // Need to check how to update MOdal
    //     const formPost = 'http://localhost:8000/api/v1/tools';
    //     console.log(formState)

    //     const form_data = new FormData();
    //     for (const key in formState) {
    //         form_data.append(key, formState[key])
    //     }

    //     console.log(form_data);
    //     fetch(formPost, {
    //         method: 'POST',
    //         // headers: {
    //         //     'Accept': 'application/json',
    //         //     'Content-Type': 'multipart/form-data; boundary=XXX',
    //         //     // 'type': 'formData'
    //         // },
    //         body: form_data
    //     })
    //     .then(() => {
    //         // NEED A NEW RESPONSE ONCE IT IS SENT...
    //         alert('You have added a tool to the system!');
    //     })
    // }

    // const cloudinarySubmit URL - https://spacejelly.dev/posts/how-to-programmatically-upload-images-to-cloudinary-in-react-next-js/

  return (
    <>
        <div 
            className='darkBG' 
            onClick={() => dispatch(modalClosed())}
        />
        <div className='centered'>
            <div className='modal'>
                <div className='modalHeader'>
                    <h5 className='heading'>Add Product</h5>
                </div>
                <button className='closeBtn' onClick={() => {
                    dispatch(modalClosed())
                    
                }}>
                    <RiCloseLine style={{ marginBottom: '-3px' }} />
                </button>
                <div className='modalContent'>
                    {/* <FormikForm /> */}
                {/* <form className='modalContent__form' onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
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
                        <input 
                            name="image" 
                            type="file"
                            // ref={fileInput}
                            onChange={handleChange}
                        /> 
                        </label>
                    <input type="submit" value='submit'/>
                </form> */}
                </div>
                <div className='modalActions'>
                    <div className='actionsContainer'>
                        <button className='deleteBtn' onClick={() => dispatch(modalClosed())}>
                            Add Product
                        </button>
                        <button
                            className='cancelBtn'
                            onClick={() => dispatch(modalClosed())}
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