import React, {Component} from "react";
import "./Home.css";

import { Animated } from "react-animated-css";
import { Carousel } from "react-bootstrap";
import kayaking from "../images/kayak.jpeg";
import ua from"../images/ua.png";
import me from"../images/me.png";

class Home extends Component {

  render () {
    
    return (
      <div className = "home">

        <div className= "row" id="me">
          <div className= "grid" >
            <Animated animationIn="slideInLeft">
              <div className="textBox">
                <p> Hello! I'm Yunive. I am from Tucson, Arizona.</p>
                
                <p> On my free time, I like to kayak, find new music on Spotify,
              and watch Netflix. </p>
              </div>
            </Animated>
            <img src={me} alt="Yunive"/> 
            <Animated animationIn="slideInRight">
              <p> I am planning to major in Mechanical Engineering and minor in Human-Centered Design </p>
            </Animated>
          </div>
        </div>

        <div className="row" id="carousel">
          <h1>Projects</h1>
          <Animated animationIn="slideInLeft">
          <div className= "grid" >
            <div className="project">
              <Carousel id="DATA7">
                <Carousel.Item>
                  <img src={ua} alt="logo"/>
                </Carousel.Item>

                <Carousel.Item>
                  <Carousel.Caption>
                    <h4>UA Data Science Insitute</h4>
                    <h4>GOAL:</h4>
                    <p> </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <Carousel.Caption>
                    Marketing Lead 
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          
            <div className="project">
              <Carousel>
                <Carousel.Item>
                  <img src={kayaking} alt="kayak"/>
                  <Carousel.Caption>
                    stuff
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img src={kayaking} alt="kayak"/>
                  <Carousel.Caption>
                    Marketing Lead 
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src={kayaking} alt="kayak"/>
                  <Carousel.Caption>
                    Marketing Lead 
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="project">
              <Carousel>
                <Carousel.Item>
                  <img src={kayaking} alt="kayak"/>
                  <Carousel.Caption>
                    stuff
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img src={kayaking} alt="kayak"/>
                  <Carousel.Caption>
                    Marketing Lead 
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src={kayaking} alt="kayak"/>
                  <Carousel.Caption>
                    Marketing Lead 
                  </Carousel.Caption>
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