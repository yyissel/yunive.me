import React from "react";
import "./Home.css";

import yunive from "../images/yunive.png"
import hackd from "../images/hackd.png";
import ua from "../images/ua.png";


function Home() {
  return (
    <div className="Home">
      <div className = "container">
        <div className = "row">
          <img src={yunive} alt="Yunive"/>
        </div>
        <div className="row">

          <div className="parent">
            <div className="child">
              <img src={hackd} alt="hackDartmouth"/>
                <div className="overlay-text">
                Hack Dartmouth
                Marketing Lead
              </div>
            </div>

            <div className="child">
              <img src={ua} alt="University of Arizona"/>
                <div className="overlay-text">
                Data 7
                UI/UX designer
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  );
}
export default Home;