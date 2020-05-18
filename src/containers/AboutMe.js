import React from "react";
import kayak from "../images/kayak.jpeg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="App">
      <header className="container">
        <div className="item">
          <p>
             MY NAME IS YUNIVE AVENDANO. I AM A 22 FROM TUCSON, ARIZONA. SHE PLANS TO BE 
             A MECHANICAL ENGINEER AND A HUMAN ENTERED DESIGN MINOR.
          </p>
          <p>
            On her free time, she likes to kayak, find new music on Spotify,
            and watch Netflix.
          </p>
          <img src={kayak} alt="hobby"/>
        </div>
      </header>
    </div>
  );
}
export default AboutMe;