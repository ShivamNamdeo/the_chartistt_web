import React from "react";
import app from "./base";
import BannerComp from "./routes/banner/BannerComp";
import HeadLineComp from "./routes/headline/HeadLineComp";

import CourseComp from "./routes/courses/CourseComp";

import FooterComp from "./routes/footer/FooterComp";
import BlogComp from "./routes/blogs/BlogComp";



const Home = () => {
  return (
  	<div>

      	
      	<BannerComp />
      	<HeadLineComp />
      	<CourseComp />
      	<BlogComp/>

      	<FooterComp />

     </div>
  );
};

export default Home;
