import React from 'react'
import { useField } from "formik";



// const validFileExtensions = { image: ['jpg', 'png', 'jpeg', 'svg'] };

// function isValidFileType(fileName, fileType) {
//   return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
// }

// export const imageSchema = Yup.object().shape({
//   image: Yup
//       .mixed()
//       .required("Required")
//       .test("is-valid-type", "Not a valid image type",
//         value => isValidFileType(value && value.name.toLowerCase(), "image"))
//       .test("is-valid-size", "Max allowed size is 100KB",
//         value => value && value.size <= MAX_FILE_SIZE)
// });

export const MyFileInput = ({label, ...props}) => {

    const [field, meta] = useField(props);
   
  return (
    <>
        <label htmlFor={props.id ||  props.name}>{label}</label>
        <input {...field}  {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
    </>
  )
}

// smrtusdt