import React, {Component} from "react";
import "./Home.css";

import { Animated } from "react-animated-css";
import { Carousel } from "react-bootstrap";
import me from"../images/me.png";
import dartpath from "../images/dartpath.png";
import hackdartmouth from "../images/hackdartmouth.png";
import sczen from "../images/sczen.png";
import senselab from "../images/senselab.png";

class Home extends Component {

  render () {
    
    return (
      <div className = "home">
        <div className= "row" id="me">
          <div className= "grid" >
          
            <Animated animationIn="slideInLeft">
              <div className="textBox">
                <p> Hello! I'm Yunive. I am from Tucson, Arizona.</p>
                <p> 
                  On my free time, I like to kayak, find new music on Spotify,
                  and watch Netflix.
                </p>
              </div>
            </Animated>

            <img src={me} alt="Yunive"/> 

            <Animated animationIn="slideInRight">
              <p> I am planning to major in Mechanical Engineering and minor in Human-Centered Design </p>
            </Animated>

          </div>
        </div>

        <div className="row" id="carousel">
          <h1>projects</h1>

          <Animated animationIn="slideInLeft">
          <div className= "grid" >
            <div className="project">

              <Carousel id="sczen">
                <Carousel.Item>
                  <img src={sczen} alt="logo"/>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textBox">
                    <Carousel.Caption>
                      <h4>Role:</h4>
                      <h5>Frontend and Backend Developer</h5>
                      <h4>Goal:</h4>
                      <h5>Designing a platform that facilitates exchange of health data
                        between a participant and a researcher</h5>      
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textBox">
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>

            </div>
            <div className="project">
              <Carousel id="dartpath">
                <Carousel.Item>
                  <img src={dartpath} alt="logo"/>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="project">
              <Carousel id="hackdartmouth">
                <Carousel.Item>
                  <img src={hackdartmouth} alt="logo"/>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="project">
              <Carousel id="sense-lab">
                <Carousel.Item>
                  <img src={senselab} alt="logo"/>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          </Animated>
        </div>
        
      </div>
    );
  }
  
}
export default Home;