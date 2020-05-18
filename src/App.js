
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <div className="header">
      <Navbar fixed= "top" bg="light" expand="lg">
          <Navbar.Brand href="/">
            Yunive Avendano
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/about-me" >About Me</Nav.Link>
            <Nav.Link href="/resume" >About Me</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <Routes />
    </div>
  );
}

export default App;

