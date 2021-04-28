import React from 'react';
import "./course.css";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import logo from "../../assets/logo.jpg";

function CourseComp() {
	return (
		<div className="course">
			<div className="course_info">
				<h1>Google IT Support Professional Certificate Course</h1>
				<h2>This is your path to a career in IT. In this program, you’ll learn in-demand skills 
				that will have you job-ready in less than 6 months. No degree or experience required.</h2>

				<div className="rating">
					<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/>
					<p>4.8 86475 Ratings</p>
				</div>

				<div className="enroll">


					<button>Enroll Now</button>

					<h1>598,459 already enrolled</h1>
				</div>
			</div>

			<div className="off_by">
				<h2>Offered By</h2>
				<img src={logo} alt=""/>
				<h1>The Chartistt</h1>
			</div>
			
		</div>
	)
}

export default CourseComp