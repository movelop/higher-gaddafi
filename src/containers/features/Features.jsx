import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title : 'Cryptocurrencies Exchange',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
    },
    {
        title: 'Gift Card Exchange',
        text : 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
]

const Fearures = () => {
    return (
        <div className = 'gpt3__features section__padding' id = 'features'>
            <div className = 'gpt3__features-heading'>
                <h1 className ='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>here are our services</p>
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
