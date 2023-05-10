import React from 'react';

import abcdojo from "../assets/abcdojo.jpg";
import forum from "../assets/forum.png";
import movie from "../assets/movie.jpg";
import weather from "../assets/weather.jpg";
import raycast from "../assets/raycast.jpg";
import workday from "../assets/workday.jpg";
import githubPic from "../assets/github.png"





const portfolioItems = [
    {
      id: 1,
      imageSrc: forum,
      github: 'https://github.com/amsudekum/Forum-Project',
    },
    {
      id: 2,
      imageSrc: weather,
      github: 'https://github.com/kcavner/weather-dashboard',
    },
    {
      id: 3,
      imageSrc: movie,
      github: 'https://github.com/jboyce313/movie-game',
    },
    {
      id: 4,
      imageSrc: raycast,
      github: 'https://github.com/kcavner/raycast-visualizer',
    },
    {
      id: 5,
      imageSrc: abcdojo,
      github: 'https://kcavner.github.io/abc-dojo/',
    },
    {
      id: 6,
      imageSrc: workday,
      github: 'https://github.com/kcavner/work-day-scheduler',
    },
  ];


function Portfolio(){

  const openGithub = (github) => {
    window.open(github, '_blank');
  };

    return (
        <div className='portfolioName'>My Projects
        <div className='portfolioPage'>
             {portfolioItems.map((item) => (
              <div className='portfolioCard'>
          <img src={item.imageSrc} alt="portfolio item" onClick={() => openGithub(item.github)} style={{position:"absolute",width: "20vw", height: "15vw" }} onMouseOver={(e) =>{e.currentTarget.style.opacity = .4;}} onMouseOut={(e) => {
        e.currentTarget.style.opacity = 1;
      }} />
        <img src={githubPic}alt="portfolio item" style={{width: "20vw", height: "15vw" }}/>
      </div>
      ))}
           
        </div>
        </div>
    )
}

export default Portfolio;

