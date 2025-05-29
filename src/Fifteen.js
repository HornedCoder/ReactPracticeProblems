import React, { useState } from 'react'
import './Fifteen.css';

const Fifteen = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <button className='menu-icon' onClick={toggleMenu}>☰</button>
            <ul className={`menu ${isOpen?'open':''}`}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Fifteen