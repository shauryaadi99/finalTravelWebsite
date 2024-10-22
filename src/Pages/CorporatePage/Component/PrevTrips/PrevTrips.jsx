import React from "react";
import style from "./prevTrips.module.css";

const data = [
  {
    id: 1,
    img: "https://acr.iitbombay.org/wp-content/uploads/2022/12/10802.png",
    name: "Mood Indigo and Mumbai",
    company: "Bit Mesra",
    location: "Mumbai",
    numOfPeople: "10+",
    description:
      "The students of BIT Mesra, embarked on an trip to Mumbai and the Mood Indigo festival at IIT. In Mumbai, they explored the vibrant city, soaking in its energy and culture. At Mood Indigo, they experienced the electrifying atmosphere of India's largest cultural festival, enjoying performances, workshops, and events that left them inspired and energized for the journey ahead.",
  },
];

const PrevTrips = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cardContainer}>
          {data.map((trip) => (
            <div key={trip.id} className={style.card}>
              <img src={trip.img} alt="trip" />
              <div className={style.info}>
                <span className={style.corpName}>{trip.company}</span>
                <h3>{trip.name}</h3>
                <p>{trip.description}</p>
                <div>
                  <span>Location: {trip.location}</span>
                  <span>No of People: {trip.numOfPeople}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PrevTrips;
