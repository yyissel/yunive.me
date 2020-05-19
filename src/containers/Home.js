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
                      <h4>Tools:</h4>
                      <h5>Figma</h5>
                      <h5>React</h5>
                      <h5>Amazon Cognito</h5>
                      <h5>AWS Lambda</h5>
                      <h5>PostgreSQL</h5>
                      <h5>PostgreSQL</h5>
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
                <Carousel.Item>
                  <div className="textBox">
                    <Carousel.Caption>
                      <h4>Role:</h4>
                      <h5>Product Designer</h5>
                      <h4>Goal:</h4>
                      <h5>Facilitating course selection for incoming Freshmen who have 
                        multiple interests for their major.</h5>      
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textBox">
                  <Carousel.Caption>
                    <h4>Tools:</h4>
                    <h5>User Interviewing</h5>
                    <h5>Figma</h5>
                  </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="project">
              <Carousel id="hackdartmouth">
                <Carousel.Item>
                  <img src={hackdartmouth} alt="logo"/>
                </Carousel.Item>
                <Carousel.Item>
                <div className="textBox">
                  <Carousel.Caption>
                    <h4>Role:</h4>
                    <h5>Marketing Lead</h5>
                    <h4>Goal:</h4>
                    <h5>Outreach to nationwide college campuses and organizations 
                      to increase hackathon's turnout.</h5>      
                  </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="textBox">
                  <Carousel.Caption>
                    <h4>Tools:</h4>
                    <h5>MailChimp</h5>
                    <h5>Typeform</h5>
                  </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className="project">
              <Carousel id="sense-lab">
                <Carousel.Item>
                  <img src={senselab} alt="logo"/>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="textBox">
                    <Carousel.Caption>
                      <h4>Role:</h4>
                      <h5>Research Intern</h5>
                      <h4>Goal:</h4>
                      <h5>Design a light-powered battery that can output energy for 
                        long periods of time to power a communication device</h5>      
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="textBox">
                  <Carousel.Caption>
                    <h4>Tools:</h4>
                    <h5>ArduinoIDE</h5>
                    <h5>LTSpice</h5>
                  </Carousel.Caption>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          </Animated>

        </div>

        <div className="row" id= "contact">
          <h1>contact me</h1>
          <h2> blitz me at:</h2>
          <a href = "mailto:yunive.y.avendano.22@dartmouth.edu">
            yunive.y.avendano.22@dartmouth.edu</a>
        </div>
      </div>
    );
  }
}
export default Home;