import React, {Component} from "react";
import "./Home.css";


import { Carousel } from "react-bootstrap";
import kayaking from "../images/kayak.jpeg";

class Home extends Component {

  render () {
    
    return (
      <div className= "contain">
        <Carousel>
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
          <Carousel.Item>
          <img src={kayaking} alt="kayak"/>
            <Carousel.Caption>
              Marketing Lead 
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
}
export default Home;