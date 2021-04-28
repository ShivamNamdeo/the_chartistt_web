import React from 'react';
import Blog from "../../assets/blogs/blog.jpg";
import "./blogs.css";

function BlogComp() {
	return (

		<div className="comp">

				<h1>LATEST BLOGS</h1>

				<div className="blog_grid">
		
					<div className="blog">
						<img src={Blog} alt="" /> 
						<div className="blog_content">
							<p>March 15, 2021</p>
							<h1>Trading implies active participation in the financial markets as opposed</h1>
							<h2>Trading implies active participation in the financial markets as opposed to investing, which suggests a buy-and-hold strategy.
							 Trading success depends on a trader's ability to be profitable over time.</h2>
							 <div className="blog_bottom">
								<h1>READ MORE</h1>
							</div>
						</div>
					</div>	
					<div className="blog">
						<img src={Blog} alt="" /> 
						<div className="blog_content">
							<p>March 15, 2021</p>
							<h1>Trading implies active participation in the financial markets as opposed</h1>
							<h2>Trading implies active participation in the financial markets as opposed to investing, which suggests a buy-and-hold strategy.
							 Trading success depends on a trader's ability to be profitable over time.</h2>
							 <div className="blog_bottom">
								<h1>READ MORE</h1>
							</div>
						</div>
					</div>	
					<div className="blog">
						<img src={Blog} alt="" /> 
						<div className="blog_content">
							<p>March 15, 2021</p>
							<h1>Trading implies active participation in the financial markets as opposed</h1>
							<h2>Trading implies active participation in the financial markets as opposed to investing, which suggests a buy-and-hold strategy.
							 Trading success depends on a trader's ability to be profitable over time.</h2>
							 <div className="blog_bottom">
								<h1>READ MORE</h1>
							</div>
						</div>
					</div>	
		
				</div>

				
				<h1>UPCOMMING EVENTS</h1>

				<div className="blog_grid">
		
					<div className="blog">
						<img src={Blog} alt="" /> 
						<div className="blog_content">
							<p>March 15, 2021</p>
							<h1>Trading implies active participation in the financial markets as opposed</h1>
							<h2>Trading implies active participation in the financial markets as opposed to investing, which suggests a buy-and-hold strategy.
							 Trading success depends on a trader's ability to be profitable over time.</h2>
							 <p>9:00 AM TO 12:00PM | 3 HOURS </p>
							 <div className="blog_bottom">
								<button>REGISTER EVENT</button>
								<h1>FREE</h1>
							</div>
						</div>
					</div>	
					<div className="blog">
						<img src={Blog} alt="" /> 
						<div className="blog_content">
							<p>March 15, 2021</p>
							<h1>Trading implies active participation in the financial markets as opposed</h1>
							<h2>Trading implies active participation in the financial markets as opposed to investing, which suggests a buy-and-hold strategy.
							 Trading success depends on a trader's ability to be profitable over time.</h2>
							 <p>9:00 AM TO 12:00PM | 3 HOURS </p>
							 <div className="blog_bottom">
								<button>REGISTER EVENT</button>
								<h1>PRICE 50$</h1>
							</div>
						</div>
					</div>	
					<div className="blog">
						<img src={Blog} alt="" /> 
						<div className="blog_content">
							<p>March 15, 2021</p>
							<h1>Trading implies active participation in the financial markets as opposed</h1>
							<h2>Trading implies active participation in the financial markets as opposed to investing, which suggests a buy-and-hold strategy.
							 Trading success depends on a trader's ability to be profitable over time.</h2>
							 <p>9:00 AM TO 12:00PM | 3 HOURS </p>
							 <div className="blog_bottom">
								<button>REGISTER EVENT</button>
								<h1>FREE</h1>
							</div>
						</div>
					</div>	
		
				</div>
		
		</div>

	)
}

export default BlogComp