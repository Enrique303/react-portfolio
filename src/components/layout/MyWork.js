import React from 'react';
import Project1 from '../../img/Project1.png';
import Workdayscheduler from '../../img/Workdayscheduler.png';
import Project2 from '../../img/Project2.png';

const MyWork = () => {
  return (
    <div className= "row">
           <div className= "column">
            <div className ="card">
               <h3>
                  Project 1 
               </h3>
               <img src={Project1} alt="profile pic" className="bio-image"/>
               <a href = 'https://github.com/pprewitt/TrailsApp' target="_blank"><p>Check out the Repo here</p></a>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  Project 2
               </h3>
               <img src={Project2} alt="profile pic" className="bio-image"/>
               <a href= 'https://github.com/hannahjorich/Book-Finder' target="_blank"><p>Check out the Repo here</p></a>
            </div>
           </div>
           <div className= "column">
            <div className ="card">
               <h3>
                  Workdayscheduler HW
               </h3>
               <img src={Workdayscheduler} alt="profile pic" className="bio-image"/>
               <a href ='https://github.com/Enrique303/workdayScheduler' target="_blank"><p>Check out the Repo here</p></a>
            </div>
           </div>
        </div>
  )
}

export default MyWork
