import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const postAPI = 'http://localhost:8000/api/v1/tools';

const addToolSchema = z.object({
    toolName: z.string().max(30, "Tool Name is required"),
    description: z.string().max(50, "Description is required"),
    owner: z.string().max(30, "Owner is required"),
    image: z
        .any()
        .refine((file) => file?.[0]?.size <= MAX_FILE_SIZE, 'Max image size is 5mb')
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type), "Only .jpg, .jpeg, .png, and .webp formats are supported")
})


const ModalForm = () => {
    
    const {
        register, 
        handleSubmit, 
        formState: {errors, isSubmitting },
        reset 
    } = useForm({
        resolver: zodResolver(addToolSchema),
        defaultValues: {
            toolName: '',
            description: '',
            owner: '',
            image: undefined,
        },
    });


    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('name', data.toolName)
        formData.append('description', data.description)
        formData.append('owner', data.owner)
        formData.append('image', data.image[0]);
        console.log(data)

        return fetch(postAPI, {
            method: 'POST',
            body: formData
        })
        .then(() => {
            // NEED A NEW RESPONSE ONCE IT IS SENT...
            console.log(data)
            reset();
            alert('You have added a tool to the system!');
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <form className='mb-6' onSubmit={handleSubmit(onSubmit)}>
        <input className='ml-3 pl-2 bg-slate-100 border rounded-md placeholder:italic placeholder:text-slate-500' placeholder='Name of Tool' {...register('toolName')} />
        {errors.toolName && <p className='bg-red-600 '>{errors.toolName.message}</p>}
        <input className='ml-3 pl-2 bg-slate-100 border rounded-md placeholder:italic placeholder:text-slate-500' placeholder='Description' {...register('description')} />
        {errors.description && <p className='bg-red-600 '>{errors.description.message}</p>}
        <input className='ml-3 pl-2 bg-slate-100 border rounded-md placeholder:italic placeholder:text-slate-500' placeholder='Owner' {...register('owner')} />
        {errors.owner && <p className='bg-red-600 '>{errors.owner.message}</p>}
        
            <label className='ml-3' htmlFor='fileupload'></label>
            <input type='file' id='fileupload' {...register('image')} />
            {errors.image && <p className='bg-red-600 '>{errors.image.message}</p>}
       
        <button type="submit">Submit</button>
    </form>
  )
}

export default ModalForm

// disabled={isSubmitting}