import React from "react";
import style from "./chooseUs.module.css";

const ChooseUs = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src="/ChooseUs.webp" alt="a lady in background" />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.heading}>
          Introducing<span>Btech TravelWala</span>
        </h1>
        <p className={style.text}>
          We’re a dedicated team of seasoned travelers who have explored diverse
          destinations around the world, learning from both the joys and
          challenges of travel. Our experiences have inspired us to create a
          platform that enhances your adventures. We’re here to assist you in
          planning your trip, booking tickets, and discovering the best places
          to stay. With our expertise, we aim to make your travel experience
          seamless and memorable, helping you create unforgettable memories
          along the way.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
