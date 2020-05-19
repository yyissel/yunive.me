import React, {Component} from "react";
import "./Home.css";


import { Carousel } from "react-bootstrap";
import kayaking from "../images/kayak.jpeg";
import me from"../images/me.png";

class Home extends Component {

  render () {
    
    return (
      <div className = "home">

        <div className= "row" id="me">
         <div className= "grid" >
          <img src={me} alt="Yunive"/> 
          <div className="textBox">
            <p> Hello! I'm Yunive. I am from Tucson, Arizona.</p>
            <p> I am planning to major in Mechanical Engineering and minor in Human-Centered Design </p>
          </div>
          </div>
        </div>

        <div className="row" id="carousel">
          <h1>Projects</h1>
          <div className= "grid" >
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
        </div>
        
      </div>
    );
  }
  
}
export default Home;