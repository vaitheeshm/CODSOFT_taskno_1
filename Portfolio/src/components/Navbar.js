

import { Link } from 'react-router-dom'

import '../styles/Navbar.css'
import { useState } from 'react'


export default function NavBarComponent() {

    const [menuState, setMenuState ]= useState("none");

    function show_drop_down() {
        setMenuState(prevState => (prevState == "block" ? "none" : "block"));
    }

    return (
        <>
            <div className="Nav_Bar">

                <div className='Title'>
                    <h1>My</h1>
                    <h1 id='Portfolio'>Portfolio.</h1>
                </div>

                <div className='Nav_links'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                </div>

                <div className='Menu_btn' onClick={show_drop_down} >
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </div>
            <div className='Drop_down' style={{display:menuState}}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
        </>
    )
}