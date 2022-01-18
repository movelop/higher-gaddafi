import React from 'react';
import { RiFacebookBoxFill, RiInstagramFill, RiPhoneFill, RiTwitterFill } from 'react-icons/ri';
import gpt3Logo from '../../assets/logo2.png'
import './footer.css';


const Footer = () => {
    return (
        <div className = 'gpt3__footer section__padding'>
            <div className = 'gpt3__footer-links'>
                <div className = 'gpt3__footer-links_logo'>
                    <img 
                        src = {gpt3Logo}
                        alt = 'logo'
                    />
                </div>
                <div className = 'gpt3__footer-links_div'>
                    <h4>Social Links</h4>
                    <p>
                        <a href="https://web.facebook.com/ibrahim.lawal.948?_rdc=1&_rdr" target='_blank' rel="noreferrer">
                            <RiFacebookBoxFill color='#fff' size={14} /> 
                            <span>Facebook</span> 
                        </a> 
                    </p>
                    <p>
                        <a href="https://twitter.com/iam_hartond" target='_blank'rel="noreferrer">
                            <RiTwitterFill color='#fff' size={14} />
                            <span>Twitter</span>  
                        </a> 
                    </p>
                    <p>
                        <a href="https://www.instagram.com/higher_gaddafi_enterprise/" target='_blank' rel="noreferrer">
                            <RiInstagramFill color='#fff' size={14} />  
                            <span>Instagram</span>
                        </a> 
                    </p>
                </div>
                {/* <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div> */}
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p style={{display: 'flex', alignItems: 'center' }}><a href = 'tel:+234 817-786-0342'><RiPhoneFill/> <span>+234 817-786-0342</span></a></p>
                    <p><a href = 'mailto:hartond2015@gmail.com'></a>hartond2015@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@ {new Date().getFullYear()} Higher Gaddafi Ent. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
