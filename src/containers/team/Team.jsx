import React from 'react';
import './team.css'; 
import { TeamItem } from '../../components';
import { blog01, blog02 } from './imports';

// const teamData = [
//     {
//         imgURL: {blog01},
//         name: "Lawal Ibrahim . O .",
//         role: "CEO"
//     },

//     {
//         imgURL: {blog02},
//         name: "Lawal Hamida Bola",
//         role: "General Manager"
//     }
// ]

const Team = () => {
    return (
        <div className='gpt3__team section__padding' id = 'team'>
            <div className="gpt3__team-heading">
                <h1 className ='gradient__text'>Meet our team</h1>
                <p>People Behind Our Success</p>
            </div>

            <div className="gpt3__team-container">
               <TeamItem imgURL={blog01} name= "Lawal Ibrahim . O ." role = "Founder / CEO" />
               <TeamItem imgURL={blog02} name= "Lawal Hamida . B ." role = "General Manager" /> 
            </div>
        </div>
    )
}

export default Team
