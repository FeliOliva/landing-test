import React from "react";
import NavBar from "./NavBar";

import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../Assets/about-background-image.png";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healty switcher chefs do all the prep work, like peeding, chopping &
            marinating so you can cook a fresh food
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
