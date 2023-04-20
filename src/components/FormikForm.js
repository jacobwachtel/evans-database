import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyTextInput } from './form/textInput'
// import { MySelect } from './form/toolSelect'


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please enter name of tool'),
    owner: Yup.string().required('Who is the owner?'),
    description: Yup.string().required('Please enter tool description'),
})


const FormikForm = () => {
  return (
    <div>
        <Formik
            initialValues={{ name: '', type: '', description: '' }}
            validationSchema={validationSchema}
            onSubmit={'/'}
            className='modalContent_form'
        >
            <Form>
                {/* <FormContainer></FormContainer> */}
                <MyTextInput
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Name of Tool"
                />
                <MyTextInput
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Name of Tool"
                />
                <MyTextInput
                    label="Owner"
                    name="owner"
                    type="text"
                    placeholder="Who is the owner"
                />
            </Form>

        </Formik>
    </div>
  )
}

export default FormikForm