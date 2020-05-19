	import React from 'react';
	import { Navbar, Nav } from 'react-bootstrap';
	import './App.css';
	import Routes from "./Routes";

	function App() {
	return ( 
		<div className = "App" >
			<div className = "header" >
				<Navbar sticky="top">
					<Navbar.Brand href = "/" >
					<h1 > Yunive Avendano </h1> 
					</Navbar.Brand> 
					<Navbar.Collapse >
						<Nav >
						<Nav.Link href = "/contact" > 
						contact
						</Nav.Link>
						<Nav.Link href = "/resume" > 
						resume 
						</Nav.Link> 
						</Nav> 
					</Navbar.Collapse> 
				</Navbar> 
			</div>

			<Routes/>
		</div>
		);
	}

	export default App;