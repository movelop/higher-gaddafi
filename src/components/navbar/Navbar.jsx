import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

import './navbar.css';

const Menu = () => (
    <>
        <p>
            <a href = '#home'>Home</a>
        </p>
        <p>
            <a href = '#wgpt3'>About Us</a>
        </p>
        <p>
            <a href = '#features'>Services</a>
        </p>
        <p>
            <a href = '#team'>Our Team</a>
        </p>
    </>
)

const Navbar = () => {
    const [toggleBar, setToggleBar] = useState(false)
    return (
        <div className = 'gpt3__navbar'>
           <div className="gpt3__navbar-links">
               <div className="gpt3__navbar-links_logo">
                   {/* <img
                        src = {logo}
                        alt = 'logo'
                   /> */}
                   <h1>Higher Gaddafi</h1>
               </div>
               <div className = 'gpt3__navbar-links_container'>
                    <Menu />
               </div>
           </div>
           <div className = 'gpt3__navbar-sign'>
                <p>
                    <a href="#">
                        <RiFacebookBoxFill color='#fff' size={32} />  
                    </a> 
                </p>
                <p>
                    <a href="#">
                        <RiTwitterFill color='#fff' size={32} />  
                    </a> 
                </p>
                <p>
                    <a href="#">
                        <RiInstagramFill color='#fff' size={32} />  
                    </a> 
                </p>
           </div>
           <div className="gpt3__navbar-menu">
                {
                    toggleBar
                    ? <RiCloseLine color = '#fff' size = {27} onClick = {() => setToggleBar(false)}  />
                    : <RiMenu3Line color = '#fff' size = {27} onClick = {() => setToggleBar(true)}  />
                }
                {
                    toggleBar && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu />
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>
                                    <a href="#">
                                        <RiFacebookBoxFill color='#fff' size={32} />  
                                    </a> 
                                </p>
                                <p>
                                    <a href="#">
                                        <RiTwitterFill color='#fff' size={32} />  
                                    </a> 
                                </p>
                                <p>
                                    <a href="#">
                                        <RiInstagramFill color='#fff' size={32} />  
                                    </a> 
                                </p>
                            </div>
                        </div>
                    )    
                }
           </div>
        </div>
    )
}

export default Navbar;
