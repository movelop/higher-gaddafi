import React from 'react';
import { RiPhoneFill } from 'react-icons/ri';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';


const Footer = () => {
    return (
        <div className = 'gpt3__footer section__padding'>
            {/* <div className = 'gpt3__footer-heading'>
                <h1 className = 'gradient__text'>Do you want to step in to the future before others</h1>      
            </div>
            <div className = 'gpt3__footer-btn'>
                <p>Request Early Access</p>
            </div> */}
            <div className = 'gpt3__footer-links'>
                <div className = 'gpt3__footer-links_logo'>
                    {/* <img 
                        src = {gpt3Logo}
                        alt = 'logo'
                    /> */}

                    <h1 style={{textColor: 'white'}}>Higher Gaddafi</h1>
                    <p>13, Ojugbele Street, Ota, Ogun State.</p>
                </div>
                {/* <div className = 'gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div> */}
                {/* <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div> */}
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>13, Ojugbele Street, Ota, Ogun State.</p>
                    <p style={{display: 'flex', alignItems: 'center' }}><a href = 'tel:+234 817-786-0342'><RiPhoneFill/> <span>+234 817-786-0342</span></a></p>
                    <p><a href = 'mailto:hartond2015@gmail.com'></a>hartond2015@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@ {new Date().getFullYear()} Higher Gaddafi. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
