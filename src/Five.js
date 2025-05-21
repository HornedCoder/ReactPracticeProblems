import React,{useState} from 'react'

const Five = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <div>
        <label>
        <input type='checkbox' onChange={handleToggle}/>
        </label>
        {toggle ? <p>Toggle is on</p> : <p>Toggle is off</p>}

    </div>
  )
}

export default Five