import React from "react";
import Aside from "../navigation/Aside";
const Home = () => {
  return (
    <div>
      
      <div className="hero">
        <img src="./assets/Hero.svg" alt="heroimage" />
        <h1 className="hero_text color">Travel the World</h1>
        <p className="sub color">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          nihil officiis amet totam necessitatibus voluptate rem animi
          inventore, nostrum aspernatur, fuga sint consectetur quis optio
          expedita in magnam quae fugit.
        </p>
      </div>
    
      <div className="featured">
        <h2 className="color popular">Popular Travel Destinations</h2>
        <hr />
        <p className="sub_heading">Here are Some </p>
        <div className="card-container">
          <div className="card">
            <img src="./assets/bali.svg" alt="baliImage" />
            <p className="title">Bali</p>
          </div>
          <div className="card">
            <img src="./assets/vitenam.svg" alt="baliImage" />
            <p className="title">Vitenam</p>
          </div>
          <div className="card">
            <img src="./assets/portugal.svg" alt="baliImage" />
            <p className="title">Portugal</p>
          </div>
        </div>
      </div>
      <div className="CTA">
        <img src="./assets/step.svg" alt="person_image" />
        <div className="text_content">
          <p className="quote">
            "Journey of a thousand miles starts with one step"
          </p>
         
        </div>
        
      </div>
      <div className="social">
        <p className="quote follow">Follow us on Social</p>
        <div className="img-container">
          <img
            src="./assets/facebook.svg"
            alt="facebook"
            className="social_item"
          />
          <img
            src="./assets/youtube.svg"
            alt="facebook"
            className="social_item"
          />
          <img
            src="./assets/twitter.svg"
            alt="facebook"
            className="social_item"
          />
          <img
            src="./assets/insta.svg"
            alt="facebook"
            className="social_item"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
