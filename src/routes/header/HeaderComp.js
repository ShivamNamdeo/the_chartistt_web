import React from 'react';
import "./header.css";
import logo from "../../assets/logo.jpg";
function HeaderComp() {
	return (
		<div className="header">
			<div className="left_header">
				<img src={logo} alt=""/>
				<h1>The Chartistt</h1>
			</div>

			<div className="right_header">
				<h1>Home</h1>
				<h1>Courses</h1>
				<h1>Events</h1>
				<h1>About Us</h1>
			</div>
			
		</div>
	)
}

export default HeaderComp