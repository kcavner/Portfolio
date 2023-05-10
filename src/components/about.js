import React from 'react';

function About(){
    return (
        <div className='aboutMe'>
            <img src='/assets/headshot.jpg'  style={{width: "20vw", height: "35vw"}}></img>
            <div className='portfolioText'>
                <div className='portfolioName'>About me</div>
                <div>
                <p>My name is kipp and i am a web developer. I specialize in the MERN-stack; however I work with a large variety of databases, front end technologies, and APIs. </p>
                </div>
                <div className='portfolioName'>My story</div>
                <div>
                    <p>i was born in kansas, lived in prarie village till i was 5 years old then my parents moved me and my sister to kauai, for 6 years. We moved back to olathe ks, and lived there from 3rd grade till highschool graduation. </p>
                </div>
                <div className='portfolioName'>Career Change</div>
                <div>
                    <p>A couple years after highschool i got my hair liscence and worked as a hair dresser for 7 years. Near the end of those seven years it dawned on me that my career path was vering somewhere i didnt belong. Ive heard from many people who have went through similiar career changes and they all said something along the lines of "it was good till it wasn't" and that about sums it up. It was an amazing experience and i will miss sharing stories with new people on the day to day. </p>
                </div>
                <div className='portfolioName'>Personality</div>
                <div>
                    <p>Integrity is very important to me becuase being true to others and myself has enriched my life. I like to make real, meaningful connections with many people. Its always a good feeling getting to the point of a relationship with some one where you have good memories to look back on and jokes only we can laugh at.  </p>
                </div>
            </div>

            
        </div>
    )
}

export default About;

