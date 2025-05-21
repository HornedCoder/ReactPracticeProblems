import React,{useState} from 'react'

const Ten = () => {
    const [file, setFile] = useState(null);
    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }
  return (
    <div>
        <input type='file' accept='image/*' onChange={handleChange}/>
        {file && <p>{file.name}</p>}
        {file && <img src={URL.createObjectURL(file)} alt='preview' />}
    </div>
  )
}

export default Ten