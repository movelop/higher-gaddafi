import React from 'react';
import './teamItem.css'

const TeamItem = ({ imgURL, name, desc }) => {
  return (
    <div className = "gpt3__team-container_teamItem">
        <div className="gpt3__team-container_teamItem-image">
            <img 
                src={imgURL} 
                alt="client" 
            />
        </div>
        <div className="gpt3__team-container_teamItem-content">
            <div>
                <h3>{name}</h3>
            </div>
            <p>{desc}</p>
        </div>
    </div>
  );
};

export default TeamItem;
