import React from "react";
import kayak from "../images/kayak.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <header className="contain" id="about">
        
          <p>
             MY NAME IS YUNIVE AVENDANO ('22). I AM FROM TUCSON, ARIZONA. I PLAN TO BE 
             A MECHANICAL ENGINEER AND A HUMAN ENTERED DESIGN MINOR.
          </p>
         
          <img src={kayak} alt="hobby"/>
          <p>
           On my free time, I like to kayak, find new music on Spotify,
            and watch Netflix.
          </p>
      </header>
    </div>
  );
}
export default AboutMe;