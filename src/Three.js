import React,{useState} from 'react'

const Three = () => {
    const [input, setInput] = useState("");


  return (
    <div>
        <input type= "text" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <h1>{input}</h1>
    </div>
  )
}

export default Three