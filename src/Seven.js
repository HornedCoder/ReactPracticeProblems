import React,{useState,useEffect} from 'react'

const Seven = () => {
    const [time, setTime] = useState(60);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        if (time === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [time]);
    const handleChange = (e) => {
        setTime(e.target.value);
    }
  return (
    <div>
        <input type='number' onChange={handleChange}/>
        <br></br>
        Time left: {time}
    </div>
  )
}

export default Seven