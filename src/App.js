import React from 'react';
import { Navbar} from 'react-bootstrap';
import './App.css';
import Routes from "./Routes";

function App() {
return ( 

		<div className = "App" >
			<div className = "header" >
					<Navbar sticky="top">
						<Navbar.Brand href = "/" >
						<h1 > Yunive Avendaño </h1> 
						</Navbar.Brand> 
					</Navbar> 
			</div>
			<Routes/>
		</div>

	);
}

export default App;