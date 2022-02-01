import React, { useRef } from 'react';
import './team.css'; 
import { TeamItem } from '../../components';
// import { blog01, blog02 } from './imports';
import Carousel from "react-elastic-carousel";

const teamData = [
    {
        imgURL: "https://legitcards.com.ng/imgs/favy.jpg",
        name: "Lawal Ibrahim . O .",
        desc: "Have been searching all over the internet for a genuine gift card trader. Fortunately I stumbled on higher Gaddafi, had doubt initially but decided to try with 10usd. I couldn't believe it when I got alert in few minutes. Ever since, have traded over 5000usd with higher Gaddafi!"
    },

    {
        imgURL: "https://legitcards.com.ng/imgs/chinedu.jpg",
        name: "Lawal Hamida Bola",
        desc: "Higher Gaddafi is the best place to sell iTunes gift cards for naira, I was credited in 10 mins, my guys didn't believe me until they saw me make several successful trades. Please keep up the good job! Will keep recommending you to friends."
    },
    {
        imgURL: "https://legitcards.com.ng/imgs/chinedu.jpg",
        name: "Lawal Hamida Bola",
        desc: "Higher Gaddafi is the best place to sell iTunes gift cards for naira, I was credited in 10 mins, my guys didn't believe me until they saw me make several successful trades. Please keep up the good job! Will keep recommending you to friends."
    },
    {
        imgURL: "https://legitcards.com.ng/imgs/chinedu.jpg",
        name: "Lawal Hamida Bola",
        desc: "Higher Gaddafi is the best place to sell iTunes gift cards for naira, I was credited in 10 mins, my guys didn't believe me until they saw me make several successful trades. Please keep up the good job! Will keep recommending you to friends."
    },
    {
        imgURL: "https://legitcards.com.ng/imgs/chinedu.jpg",
        name: "Lawal Hamida Bola",
        desc: "Higher Gaddafi is the best place to sell iTunes gift cards for naira, I was credited in 10 mins, my guys didn't believe me until they saw me make several successful trades. Please keep up the good job! Will keep recommending you to friends."
    },
    {
        imgURL: "https://legitcards.com.ng/imgs/chinedu.jpg",
        name: "Lawal Hamida Bola",
        desc: "Higher Gaddafi is the best place to sell iTunes gift cards for naira, I was credited in 10 mins, my guys didn't believe me until they saw me make several successful trades. Please keep up the good job! Will keep recommending you to friends."
    },
]

// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 1 },
//     { width: 768, itemsToShow: 1 },
//     { width: 1200, itemsToShow: 1 },
//   ];

const itemsPerPage = 1
let resetTimeout;

const Team = () => {
    const carouselRef = useRef(null);
    const totalPages = Math.ceil(teamData.length / itemsPerPage)
    return (
        <div className='gpt3__team section__padding' id = 'team'>
            <div className="gpt3__team-heading">
                <h1 className ='gradient__text'>Meet our team</h1>
                <p>People Behind Our Success</p>
            </div>

            <div className="gpt3__team-container">
                <Carousel ref={carouselRef}
                    enableAutoPlay = {true} 
                    autoPlaySpeed = {3000} 
                    showArrows ={false} 
                    onNextEnd={({ index }) => {
                        clearTimeout(resetTimeout)
                        if (index + 1 === totalPages) {
                           resetTimeout = setTimeout(() => {
                              carouselRef.current.goTo(0)
                          }, 3000) // same time
                        }
                   }}
                   itemsToShow={itemsPerPage}
                >
                    {teamData.map((td, i) => (
                        <TeamItem imgURL = {td.imgURL} name = {td.name} desc = {td.desc}  />
                    ) )}
                </Carousel>
            </div>
        </div>
    )
}

export default Team
