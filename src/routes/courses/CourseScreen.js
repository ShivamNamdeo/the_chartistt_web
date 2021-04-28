import React from 'react';
import CourseComp from "./CourseComp";
import CheckIcon from '@material-ui/icons/Check';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

function CourseScreen() {
	return (
		<div >
			<CourseComp/>

			<div className="course_screen">
				
				<div className="course_learn">
					<h1>WHAT YOU WILL LEARN</h1>

					<div className="learn_grid">
 						
						<p><CheckIcon />Gain skills required to succeed in an entry-level IT job</p>
						<p><CheckIcon />Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service</p>
						<p><CheckIcon />Gain skills required to succeed in an entry-level IT job</p>
						<p><CheckIcon />Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service</p>
					</div>

				</div>
				<div className="course_learn">
					<h1>WHAT YOU WILL LEARN</h1>

					<div className="learn_grid">
 						
						<p>Gain skills required to succeed in an entry-level IT job</p>
						<p>Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service</p>
						<p>Gain skills required to succeed in an entry-level IT job</p>
						<p>Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service</p>
					</div>

				</div>

			</div>
		</div>
	)
}

export default CourseScreen