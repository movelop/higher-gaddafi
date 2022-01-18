import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import './cta.css';

const CTA = () => {
    return (
        <div className ='gpt3__cta'>
            <div className = 'gpt3__cta-content' >
                <p>Do you have a question?</p>
                <h3>Contact us today and enjoy the world of endless possibilities we offer</h3>
            </div>
            <div className = 'gpt3__cta-button'>
                <a href="https://wa.me/message/JVOUKNQBQ2PME1" target='_blank' rel="noreferrer">
                    <button type = 'button' ><RiWhatsappFill fontSize={21} style={{marginRight :"10px"}} /> <span>Contact us</span></button>
                </a>
                
            </div>
        </div>
    )
}

export default CTA
