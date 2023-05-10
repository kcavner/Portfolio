import React, { useState } from 'react';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
// import Resume from './resume';


function Navbar() {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
<div>
<header>
  <div className='name'style={{ cursor: "pointer" }} onClick={() => handlePageChange('about')}>Kipp Cavner</div>
    <nav>
     
          <a className='navLink' href="#" onClick={() => handlePageChange('about')}>
            About Me
          </a>
      
          <a className='navLink' href="#" onClick={() => handlePageChange('portfolio')}>
            Portfolio
          </a>
     
          <a className='navLink' href="#" onClick={() => handlePageChange('contact')}>
            Contact
          </a>
 
        {/* <li>
          <a href="#" onClick={() => handlePageChange('resume')}>
            Resume
          </a> */}
        {/* </li> */}
    </nav>
</header>
  {currentPage === 'portfolio' && <Portfolio />}
  {currentPage === 'about' && <About />}
  {currentPage === 'contact' && <Contact />}
  {/* {currentPage === 'resume' && <Resume />} */}
 </div>
  );
}

export default Navbar;