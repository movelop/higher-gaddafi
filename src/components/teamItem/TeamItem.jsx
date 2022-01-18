import React from 'react';
import './teamItem.css'

const TeamItem = ({ imgURL, name, role }) => {
    return (
        <div className='gpt3__team-container_item'>
            <div className = 'gpt3__team-container_item-image'>
                <img 
                    src = {imgURL}
                    alt = 'blog url'
                />
            </div>
            <div className="gpt3__team-container_item-content">
                <h2>{name}</h2>
                <h4 className='gradient__text'>{role}</h4>
            </div>
        </div>
    )
}

export default TeamItem
