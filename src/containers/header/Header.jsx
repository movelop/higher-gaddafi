import React from 'react';
import ai from '../../assets/ai.png'
import './header.css';

const Header = () => {
    return (
        <div className = 'gpt3__header section__padding' id = 'home'>
            <div className ='gpt3__header-content'>
                <h1 className = 'gradient__text'>
                    Cryptocurrency is for everyone
                </h1>
                <p>
                    Buy and sell Bitcoin (BTC), Ether (ETH), USDT and other crypto with us.
                    We also redeem all types of gift cards.
                </p>
                <div className="gpt3__header-content__input">
                    <a href="https://wa.me/message/JVOUKNQBQ2PME1" target='_blank' rel="noreferrer">
                        <button type = 'button'>Start Selling</button>
                    </a>
                </div>
            </div>
            <div className = 'gpt3__header-image' >
                <img
                    src = {ai}
                    alt = 'cryptocurrency'
                />
            </div>
        </div>
    )
}

export default Header
