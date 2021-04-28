import React from 'react'
import "./banner.css";
import banner from "../../assets/icon.png";


function BannerComp() {
	return (
		<div className="banner">

			<div className="banner_head_box">
				<h1>The Perfect Formula For Indian Stock Traders</h1>
				<h2>We’re more than just a learning platform. You’ll learn to become a mindful trader, develop a proven process, and join a community of strong traders.</h2>
				<button>Get Started</button>
			</div>


			<img src={banner} alt=""/>

		</div>
	)
}

export default BannerComp