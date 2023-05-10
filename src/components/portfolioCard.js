import React from 'react';

const PortfolioCard = ({ imageSrc, github }) => {
  const openGithub = () => {
    window.open(github, '_blank');
  };

  return (
    <div className='portfolioCard'>
      <img src={imageSrc} alt="portfolio item" onClick={openGithub} style={{position:"absolute",width: "20vw", height: "15vw" }} onMouseOver={(e) =>{e.currentTarget.style.opacity = .4;}} onMouseOut={(e) => {
      e.currentTarget.style.opacity = 1;
    }} />
      <img src="../assets/github.png"alt="portfolio item" style={{width: "20vw", height: "15vw" }}/>
    </div>
  );
};

export default PortfolioCard;


