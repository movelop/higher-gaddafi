import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className = 'gpt3__whatgpt3 section__margin' id = 'wgpt3'>
            <div className = 'gpt3__whatgpt3-feature' >
                <Feature 
                    title = 'Why Higher Gaddafi Enterprise?' 
                    text = 'Higher Gaddafi Enterprise provides escrowed P2P Bitcoin marketplace where people buy and sell Bitcoin easily and safely. We are passionate about your experience with us. We want your profit margins to stay ahead of the regular trade curve to provide consistent and satisfying transactions to make your profits stand out.'
                />
            </div>
            <div className = 'gpt3__whatgpt3-heading'>
                <h1 className ='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Here are our services</p>
            </div>
            <div className = 'gpt3__whatgpt3-container'>
                <Feature 
                    title = 'P2P EXCHANGE'
                    text = 'P2P (Peer-to-Peer) involves buying coins from other traders with a secured escrow (Binance p2p platform is a cryptocurrency platform for individuals, where users can interact with each other by buying and selling Cryptocurrencies)'
                />
                <Feature
                    title = 'Gift Card Exchange'
                    text = 'We are a very reliable platform to sell gift cards in Nigeria. We give the best rate and payment is instant upon confirmation of your gift card. With Higher Gaddafi, no more losing your cards to reapers. '
                />
                <Feature
                    title = 'Wallet Fund Purchase'
                    text = 'Exchange of Wallet funds (Cash App, Venmo, PayPal, etc.) is now 100% possible. With our Wallet exchange service.'
                />
            </div>
        </div>
    )
}

export default WhatGPT3
