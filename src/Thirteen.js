import React,{useState} from 'react'



const Thirteen = () => {
    const items = ["Item1", "Item2", "Item3", "Another Item1", "Another Item2"]

    const [searchItem, setSearchItem] = useState("");
    const filteredItem = items.filter((item)=>
        item.toLowerCase().includes(searchItem.toLowerCase())
    )
    return (
        <div>
            <input type='text' placeholder='search Items...' onChange={(e)=>setSearchItem(e.target.value)}></input>
            <ul>
                {filteredItem.map((item,index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Thirteen