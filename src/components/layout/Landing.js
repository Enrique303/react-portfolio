import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
   return(
   <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Enrique Lopez</h1>
          <p className="lead">
          I am a Web Developer, Programmer... Gamer
          </p>
          <div className="buttons"></div>
        </div>
        <div className= "row">
           <div className= "column">
            <div className ="card">
               <h3>
                  About Me
               </h3>
               <Link to = '/about'><p>If you are interested in learning about me click here!</p></Link>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  My Work
               </h3>
               <Link to= '/mywork'><p>Check out some of my projects!</p></Link>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  Contact Me
               </h3>
               <Link to ='/contact'><p>Click here to contact</p></Link>
            </div>
           </div>
        </div>
      </div>
    </section>
   ) 
}

export default Landing
