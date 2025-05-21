import React,{useState,useEffect} from 'react'

const Six = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => setData(data))
    }, [])
  return (
    <div>
        {
            data?(
                <div>
                    <h1>{data.title}</h1>
                </div>
            ):(
                <p>Loading...</p>
            )

        }
    </div>
  )
}

export default Six