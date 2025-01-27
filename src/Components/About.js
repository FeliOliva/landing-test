import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          aspernatur, nemo accusamus esse amet neque tenetur repudiandae
          voluptas a nesciunt, odit et adipisci repellendus sunt quibusdam
          possimus earum excepturi deleniti.
        </p>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          perferendis odio voluptas totam cupiditate, dolorum neque explicabo
          quod maxime dolorem eius eos quaerat, alias quae cum exercitationem
          accusamus voluptatum nobis.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
