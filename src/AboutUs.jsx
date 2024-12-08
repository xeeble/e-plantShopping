import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      { <h1 className="about-us-heading">About Us</h1> }
      <p className="about-us-description">Welcome to Paul's Plants, where green meets serenity!</p>
      <p className="about-us-content">
        At Paul's Plants, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of 
        high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and 
        more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every 
        plant enthusiast.
      </p>
      { <p className="plant_logo_left"><img src="https://cdn.pixabay.com/photo/2023/05/30/08/06/planting-8027884_1280.jpg" height='150px' width='250px' alt="" /></p> }
      <p className="about-us-content">
        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
        Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
        the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
        home or office.
      </p>
      { <p className="plant_logo_right"><img src="https://cdn.pixabay.com/photo/2013/05/04/09/46/flowers-108810_960_720.jpg" height='150px' width='250px' alt="" /></p> }

      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. Visit Paul's Plants today and experience the 
        beauty of nature right at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
