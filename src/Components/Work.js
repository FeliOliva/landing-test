import React from "react";
import PickeMeal from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
const Work = () => {
  const workInfoData = [
    {
      image: PickeMeal,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. adipisicing elit. Quisquam, quae.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Delivery",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. adipisicing elit. Quisquam, quae. adipisicing elit. Quisquam, quae.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          ullam cupiditate soluta corrupti facilis obcaecati minus doloremque
          enim dolor accusantium quibusdam distinctio maiores, mollitia impedit
          culpa voluptas ipsam? Perferendis, quia.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
