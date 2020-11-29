import React from 'react'
import { Link } from 'react-router-dom';
import ProfilePic from '../../img/profilepic.jpg';
import Contact from '../../img/Contact.jpg';
import Work from '../../img/Work.jpg';

const Landing = () => {
   return(
   <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Enrique Lopez</h1>
          <p className="lead">
          I am a Web Developer, Programmer... Gamer
          </p>
        </div>
        <div className= "row">
           <div className= "column">
            <div className ="card">
               <h3>
                  About Me
               </h3>
               <img src={ProfilePic} alt="profile pic" className="bio-image"/>
               <Link to = '/about'><p>If you are interested in learning about me click here!</p></Link>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  My Work
               </h3>
               <img src={Work} alt="profile pic" className="bio-image"/>
               <Link to= '/mywork'><p>Check out some of my projects!</p></Link>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  Contact Me
               </h3>
               <img src={Contact} alt="profile pic" className="bio-image"/>
               <Link to ='/contact'><p>Click here to contact</p></Link>
            </div>
           </div>
        </div>
           <div className= "container">
            <div className ="card">
               <h3>Stalk Me Here</h3>
               <div>
                  <ul>
                  <li><a href="https://github.com/Enrique303" target = '_blank'><i class = "fab fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/enrique-lopez-30552519a/" target = '_blank'><i class = "fab fa-linkedin"></i></a></li>
                  <p></p>
                  </ul>
               </div>
            </div>
           </div>
      </div>
    </section>
   ) 
}

export default Landing
