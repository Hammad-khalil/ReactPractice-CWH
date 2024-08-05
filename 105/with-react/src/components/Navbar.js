import React from 'react'
import "../App.css"
// import Footer from './Footer'

const Navbar = ({ logotext }) => {
    return (
        <div>
            <div className="logo">
                {logotext}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </div>
    )
}

export default Navbar;
