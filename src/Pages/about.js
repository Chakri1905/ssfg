// pages/about.js
import ParticlesBg from "particles-bg";
import React from "react";
import logo from './ssfglogo.jpg';
const About = () => {
	return (
        <div>
   
	<div className="App">
      <header className="App-header">
      <h1>Welcome to Seeta rama Fancy And General Stores Super Market</h1>
		<img src={logo} alt="ssfg"></img>
      </header>
      <div className="App-content">
        <div className="App-description">
        <ParticlesBg type="cobweb" bg={true} />
          
          <p>
        Welcome to SSFG Super Market! We are committed to providing high-quality
        products and excellent customer service. Our goal is to make your
        shopping experience enjoyable and convenient.
      </p>
      <p>
        At SSFG Super Market, we offer a wide range of products, including fresh
        produce, groceries, household items, and more. Our dedicated team works
        hard to ensure that our shelves are stocked with the best products to
        meet your needs.
      </p>
      <p>
        If you have any questions or feedback, feel free to contact us. We
        appreciate your support and look forward to serving you at SSFG Super
        Market.
      </p>
      
            </div>
            </div>
            </div>
            </div>
	);
};

export default About;
