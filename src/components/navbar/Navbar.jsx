import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';
import logo from '../../assets/logo1.png';

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
            <a href = '#team'>Testimonials</a>
        </p>
    </>
)

const Navbar = () => {
    const [toggleBar, setToggleBar] = useState(false)
    return (
        <div className = 'gpt3__navbar'>
           <div className="gpt3__navbar-links">
               <div className="gpt3__navbar-links_logo">
                   <img
                        src = {logo}
                        alt = 'logo'
                   />
               </div>
               <div className = 'gpt3__navbar-links_container'>
                    <Menu />
               </div>
           </div>
           <div className = 'gpt3__navbar-sign'>
                <p>
                    <a href="https://web.facebook.com/ibrahim.lawal.948?_rdc=1&_rdr" target='_blank' rel="noreferrer">
                        <RiFacebookBoxFill color='#fff' size={32} />  
                    </a> 
                </p>
                <p>
                    <a href="https://twitter.com/iam_hartond" target='_blank' rel="noreferrer">
                        <RiTwitterFill color='#fff' size={32} />  
                    </a> 
                </p>
                <p>
                    <a href="https://www.instagram.com/higher_gaddafi_enterprise/" target='_blank' rel="noreferrer">
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
                                    <a href="https://web.facebook.com/ibrahim.lawal.948?_rdc=1&_rdr" target='_blank' rel="noreferrer">
                                        <RiFacebookBoxFill color='#fff' size={32} />  
                                    </a> 
                                </p>
                                <p>
                                    <a href="https://twitter.com/iam_hartond" target='_blank' rel="noreferrer">
                                        <RiTwitterFill color='#fff' size={32} />  
                                    </a> 
                                </p>
                                <p>
                                    <a href="https://www.instagram.com/higher_gaddafi_enterprise/" target='_blank' rel="noreferrer">
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
