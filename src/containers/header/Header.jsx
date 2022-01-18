import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
import './header.css';

const Header = () => {
    return (
        <div className = 'gpt3__header section__padding' id = 'home'>
            <div className ='gpt3__header-content'>
                <h1 className = 'gradient__text'>
                    We are a trust worthy 
                    firm whose goal is to 
                    provide customers statisfaction
                </h1>
                <p>
                    crytocurrencies are the new ways to get investment done where one has the opportunity to make funds at a volitile rate
                </p>
                <div className="gpt3__header-content__input">
                    <input type = 'email' placeholder = 'Your Email Address'  />
                    <button type = 'button' onClick={() => {}}>Subscribe</button>
                </div>
            </div>
            <div className = 'gpt3__header-image' >
                <img
                    src = {ai}
                    alt = 'ai'
                />
            </div>
        </div>
    )
}

export default Header
