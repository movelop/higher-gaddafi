import React, { useRef } from 'react';
import './team.css'; 
import { TeamItem } from '../../components';
import Carousel from "react-elastic-carousel";

const teamData = [
    {
        imgURL: "https://legitcards.com.ng/imgs/favy.jpg",
        name: "Oki Oluwagbemiga",
        desc: "Higher Gaddafi is just the best Nigerian giftcards and bitcoin vendor. Their customer service and rate is very high. Thank you for being there"
    },

    {
        imgURL: "https://legitcards.com.ng/imgs/chinedu.jpg",
        name: "Golden Uhzordinma",
        desc: "Higher Gaddafi is the best place to sell iTunes gift cards for naira, I was credited in 10 mins, my guys didn't believe me until they saw me make several successful trades. Please keep up the good job! Will keep recommending you to friends."
    },
    {
        imgURL: "https://www.sandycards.com.ng/kehinde.jpg",
        name: "Isreal Kolawole",
        desc: "Higher Gaddafi have been tested and trusted, I won't be needing another vendor, I'm satisfied trading here."
    },
    {
        imgURL: "https://bitcardy.com/imgs/test2.jpeg",
        name: "Collins Francis",
        desc: "Have been losing money to scammers online until I found Higher Gaddafi. I'm so happy now, thank you Higher Gaddafi"
    },
    {
        imgURL: "https://bitcardy.com/imgs/test3.jpeg",
        name: "Idowu Ayoola",
        desc: "Have been searching all over the internet for a genuine gift card trader. Fortunately I stumbled on Higher Gaddafi, had doubt initially but decided to try with 10usd. I couldn't believe it when I got alert in few minutes. Ever since, have traded over 5000usd with Higher Gaddafi!" 
        
    },
    {
        imgURL: "https://bitcardy.com/imgs/test1.jpeg",
        name: "Lawal Hamida Bola",
        desc: "Higher Gaddafi as been a very interesting place to sell my Bitcoin as well as any type of Gift cards. After passing through a lot of stress and fraud in many exchange websites, I was so excited when I discovered this."
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
                <h1 className ='gradient__text'>Testimonials</h1>
                <p>Here are what our customers have to say about our services</p>
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
