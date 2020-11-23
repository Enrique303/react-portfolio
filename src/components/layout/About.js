import React from 'react';
import ProfilePic from '../../img/profilepic.jpg';


const About = () => {
  return (
    <div className="container">
      <h2>About Me</h2>
      <div></div>
      <p className="lead">
        Let me tell you a little about myself and what I do...
      </p>
      <div>
        <img src={ProfilePic} alt="profile pic" className="bio-image"/>
        <div>
          <h4>Hi There!</h4>
          <p>
            My name is Enrique, thanks for comming to check out my portfolio. I am 27 years old and for the last 4 months I have been learning web development.  I was born in northern California and have been in Colorado now for the last 20 years.  I enjoy outdoor activities, rooting for the Broncos, as well as sitting in front of my PC playing video games(although these days its sitting there learning new frameworks and technologies). My current job has me in charge of the Safety and QA department.  2020 has been a crazy year, and I knew it was time to start learning something I have always been interested in.  Learning web development has turned into a passion.  There is so much to learn and the industry is constantly evolving, and the more I see it the more I want to a part of it.
       </p>
        </div>
      </div>
    </div>  
  )
}

export default About
