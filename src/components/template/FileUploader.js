import React, {useRef} from 'react'

const FileUploader = ({onFileSelect}) => {

    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        onFileSelect(e.target.files[0])
    }

  return (
    <>
        <p>Picture</p>
        <input 
            name="picture" 
            type="file" 
            onChange={(e) => setImage(e.target.files[0])}
        /> 
    </>
  )
}

export default FileUploader