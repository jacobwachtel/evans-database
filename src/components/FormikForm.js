import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyTextInput } from './form/textInput'
import { MyFileInput } from './form/fileInput';

const MAX_FILE_SIZE = 10000000; //1mb
const validFileExtensions = { image: ['jpg', 'png', 'jpeg', 'svg'] };

const isValidFileType = (fileName, fileType) => {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
  }


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter name of tool'),
    owner: Yup.string().required('Who is the owner?'),
    description: Yup.string().required('Please enter tool description'),
    image: Yup
        .mixed()
        .required("Required")
        // .test("is-valid-type", "Not a valid image type",
        //     value => isValidFileType(value , "image"))
        // .test("is-valid-size", "Max allowed size is 1mb",
        //     value => value && value.size <= MAX_FILE_SIZE)
})

const handleSubmit = async (values) => {
        // Need to check how to update MOdal
        const postAPI = 'http://localhost:8000/api/v1/tools';
        // console.log(formState)

        const formData = new FormData();
        formData.append("name", values.name)
        formData.append("owner", values.owner)
        formData.append("description", values.description)
        // formData.append("image", values.image)

        console.log(values);
        fetch(postAPI, {
            method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'multipart/form-data; boundary=XXX',
            //     // 'type': 'formData'
            // },
            body: formData
        })
        .then(() => {
            // NEED A NEW RESPONSE ONCE IT IS SENT...
            alert('You have added a tool to the system!');
        })
    }


const FormikForm = () => {
  return (
    <div>
        <Formik
            initialValues={{ 
                name: '', 
                type: '', 
                description: '', 
                image: null,
            }}
            validationSchema={validationSchema}
            className='modalContent_form'
            onSubmit={(values, { setSubmitting }) => {
                const postAPI = 'http://localhost:8000/api/v1/tools';
                // console.log(formState)

                const formData = new FormData();
                formData.append("name", values.name)
                formData.append("owner", values.owner)
                formData.append("description", values.description)
                // formData.append("image", values.image)

                console.log(formData);
                setSubmitting(false)
                fetch(postAPI, {
                    method: 'POST',
                    // headers: {
                    //     'Accept': 'application/json',
                    //     'Content-Type': 'multipart/form-data; boundary=XXX',
                    //     // 'type': 'formData'
                    // },
                    body: formData
                })
                .then(() => {
                    // NEED A NEW RESPONSE ONCE IT IS SENT...
                    alert('You have added a tool to the system!');
                })
                .catch((err) => {
                    console.log(err)
                })
              
            }}
        >
            {({ values, handleChange, handleSubmit, setFieldValue, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                    />

                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        value={values.description}
                        onChange={handleChange}
                    />

                    <label htmlFor="owner">Owner:</label>
                    <input
                        id="owner"
                        name="owner"
                        type="text"
                        value={values.owner}
                        onChange={handleChange}
                    />

                    <label htmlFor="image">Image:</label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={event => {
                        setFieldValue('image', event.target.files[0]);
                        }}
                    />
                    <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : 'Submit'}
                    </button>
                
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default FormikForm








