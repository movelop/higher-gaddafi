import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title : 'Initiate Trade',
        text : "To initiate a trade contact us on WhatsApp by clicking on the 'Start Selling' button and we will respond to you immediately"
    },
    {
        title: 'Ask Rate & Proceed',
        text : 'Tell us what you are trading for, either Bitcoin, Ethereum, or Gift cards, if you are selling your Gift Cards to us please specify the type of card.',
    },
    {
        title : 'Get Instant Credit Alert',
        text : 'Once the trade is successful, payment is instantly sent to your bank account. We do not use banks that delay alerts, we use the best for instant credit alerts.'
    },
]

const Fearures = () => {
    return (
        <div className = 'gpt3__features section__padding' id = 'features'>
            <div className = 'gpt3__features-heading'>
                <h1 className ='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>How to trade with Higher Gaddafi Enterprise</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((featureData, index) => (
                    <Feature 
                        key = {featureData.title + index}
                        title = {featureData.title}
                        text = {featureData.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Fearures
