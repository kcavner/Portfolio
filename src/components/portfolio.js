import React from 'react';
import PortfolioCard from './portfolioCard';


const portfolioItems = [
    {
      id: 1,
      imageSrc:'../assets/forum.png',
      github: 'https://github.com/amsudekum/Forum-Project',
    },
    {
      id: 2,
      imageSrc: '../assets/weather.JPG',
      github: 'https://github.com/kcavner/weather-dashboard',
    },
    {
      id: 3,
      imageSrc: '../assets/movie.JPG',
      github: 'https://github.com/jboyce313/movie-game',
    },
    {
      id: 4,
      imageSrc: '../assets/raycast.JPG',
      github: 'https://github.com/kcavner/raycast-visualizer',
    },
    {
      id: 5,
      imageSrc: '../assets/abcdojo.JPG',
      github: 'https://kcavner.github.io/abc-dojo/',
    },
    {
      id: 6,
      imageSrc: '../assets/workday.jpg',
      github: 'https://github.com/kcavner/work-day-scheduler',
    },
  ];

function Portfolio(){
    return (
        <div className='portfolioName'>My Projects
        <div className='portfolioPage'>
             {portfolioItems.map((item) => (
        <PortfolioCard
          key={item.id}
          imageSrc={item.imageSrc}
          github={item.github}
          
        />
      ))}
           
        </div>
        </div>
    )
}

export default Portfolio;

