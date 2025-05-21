import React,{useState} from 'react'

const Eight = () => {
    const [bg, setBg] = useState('yellow');
    const handleChange = () => {
        const newColor = bg === 'yellow' ? 'blue' : 'yellow';
        setBg(newColor);
    }
  return (
    <div onClick={handleChange}
        style={{
            backgroundColor: bg,
            height: '200px',
            width: '200px',
            cursor: 'pointer'
        }}>
            Click me to change color
    </div>
  )
}

export default Eight