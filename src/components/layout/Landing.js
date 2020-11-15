import React from 'react'

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
               <p>If you are interested in learning about me click here!</p>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  My Work
               </h3>
               <p>Check out some of my projects!</p>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  Contact Me
               </h3>
               <p>Click here to contact me</p>
            </div>
           </div>
        </div>
      </div>
    </section>
   ) 
}

export default Landing
