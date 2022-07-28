import React from 'react'
import './styles/ModalAdd.css'
import { RiCloseLine } from 'react-icons/ri'

const ModalAdd = ({ formState, setFormState, setIsModalOpen, setName, name, setDescription, description, setImage, image }) => {

    // const fileUploader = ({})

    const fileInput = React.useRef(null);


    const handleChange = (e) => {
        // e.preventdefault()
        let value;
        let name = e.target.name;
        let type = e.target.type;
        if(type === 'text') {
            value = e.target.value;
        }
        else if (type === 'file') {
            value = e.target.files[0]
        }
        setFormState({
            ...formState,
            [name]: value
        })
        // console.log(formState); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Need to check how to update MOdal
        const postURL = 'http://localhost:8000/api/v1/tools';
        console.log(formState, image);

        const formData = new FormData()
        formData.append(1, "value")
        console.log(formData);


        // fetch(postURL, {
        //     method: 'POST',
        //     // headers: {
        //     //     'Accept': 'application/json',
        //     //     'Content-Type': 'multipart/form-data; boundary=-----arbitrary boundary',
        //     //     'type': 'formData'
        //     // },
        //     body: {...formState}
        // })
        // .then(() => {
        //     // NEED A NEW RESPONSE ONCE IT IS SENT...
        //     alert('You have added a tool to the system!');
        // })
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
                <form className='modalContent__form' onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
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