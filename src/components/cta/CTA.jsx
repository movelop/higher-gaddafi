import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import './cta.css';

const CTA = () => {
    return (
        <div className ='gpt3__cta'>
            <div className = 'gpt3__cta-content' >
                <p>Join the long list of happy customers</p>
                <h3>Contact us today and enjoy the world of endless possibilities we offer</h3>
            </div>
            <div className = 'gpt3__cta-button'>
                <a href="#">
                    <button type = 'button' ><RiWhatsappFill fontSize={21} style={{marginRight :"10px"}} /> <span>Contact us</span></button>
                </a>
                
            </div>
        </div>
    )
}

export default CTA
