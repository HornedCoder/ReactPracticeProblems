import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import { Routes, Route, Link } from 'react-router-dom'

const Nine = () => {
  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Nine