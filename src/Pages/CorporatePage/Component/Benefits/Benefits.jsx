import React from "react";
import styles from "./benefits.module.css";

const data = [
  {
    id: 1,
    title: "Open for all",
    text: "You don't need to own a company or be a teacher to organize a trip. Anyone, including teachers, students, employees, CEOs, and more, can join us.",
    svg: (
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 45.478 45.478"
        fill="#d897f0"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path
                fill="#d897f0"
                d="M41.834,5.872l-5.174-4.18c-3.273-2.644-8.087-2.132-10.731,1.14L11.455,20.748 c-2.644,3.273-2.268,7.977,0.836,10.485c3.105,2.508,7.782,1.886,10.426-1.387l10.025-12.409c0.612-0.756,0.493-1.866-0.262-2.476 c-0.757-0.611-1.865-0.494-2.476,0.263l-10.025,12.41c-1.424,1.762-3.88,2.147-5.475,0.86c-1.594-1.288-1.733-3.77-0.311-5.532 L28.669,5.045c1.424-1.762,4.016-2.038,5.777-0.615l5.175,4.181c1.762,1.423,2.038,4.016,0.614,5.777l-21.04,26.046 c-1.424,1.762-4.016,2.038-5.778,0.614l-9.74-7.869c-0.757-0.611-1.865-0.494-2.476,0.263c-0.61,0.756-0.492,1.866,0.263,2.476 l9.741,7.869c3.272,2.644,8.086,2.132,10.73-1.141L42.977,16.6C45.618,13.329,45.108,8.515,41.834,5.872z"
              ></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Earn Money Easily",
    text: "Partnering with us allows you to earn effortlessly. We offer special B2B rates to corporate partners, ensuring profitability without much effort on your part.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        fill="#d897f0"
        stroke="#d897f0"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="0.000"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g id="Layer_2" dataname="Layer 2">
            <g id="invisible_box" dataname="invisible box"></g>
            <g id="Layer_7" dataname="Layer 7">
              <g>
                <path d="M34.3,20.1h0a6.7,6.7,0,0,1-4.1-1.3,2,2,0,0,0-2.8.6,1.8,1.8,0,0,0,.3,2.6A10.9,10.9,0,0,0,32,23.8V26a2,2,0,0,0,4,0V23.8a6.3,6.3,0,0,0,3-1.3,4.9,4.9,0,0,0,2-4h0c0-3.7-3.4-4.9-6.3-5.5s-3.5-1.3-3.5-1.8.2-.6.5-.9a3.4,3.4,0,0,1,1.8-.4,6.3,6.3,0,0,1,3.3.9,1.8,1.8,0,0,0,2.7-.5,1.9,1.9,0,0,0-.4-2.8A9.1,9.1,0,0,0,36,6.3V4a2,2,0,0,0-4,0V6.2c-3,.5-5,2.5-5,5.2s3.3,4.9,6.5,5.5,3.3,1.3,3.3,1.8S35.7,20.1,34.3,20.1Z"></path>{" "}
                <path d="M42.2,31.7a5.2,5.2,0,0,0-4-1.1l-9.9,1.8a4.5,4.5,0,0,0-1.4-3.3L19.8,22H5a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2H8.3l11.2,9.1,20.4-3.7a5,5,0,0,0,2.3-8.7Zm-3,4.8L20.5,39.9,10,31.2V26h8.2l5.9,5.9a.8.8,0,0,1-1.2,1.2l-3.5-3.5a2,2,0,0,0-2.8,2.8l3.5,3.5a4.5,4.5,0,0,0,3.4,1.4,5.7,5.7,0,0,0,1.8-.3h0l13.6-2.4a1.1,1.1,0,0,1,.8.2.9.9,0,0,1,.3.7A1,1,0,0,1,39.2,36.5Z"></path>{" "}
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Flexible Options",
    text: "We offer flexible trip options tailored to your needs. Whether it's a corporate retreat or a college excursion, we customize the trip to suit your requirements.",
    svg: (
      <svg
        fill="#d897f0"
        height="100%"
        width="100%"
        viewBox="0 0 60 60"
        stroke="#d897f0"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path d="M42,12H20.414l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-8.999,8.999 c-0.093,0.092-0.166,0.203-0.217,0.326c-0.101,0.244-0.101,0.52,0,0.764c0.051,0.123,0.124,0.234,0.217,0.326l8.999,8.999 C26.488,22.902,26.744,23,27,23s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L20.414,14H42c8.822,0,16,7.178,16,16 c0,4.252-1.668,8.264-4.696,11.295c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293 C58.124,39.3,60,34.786,60,30C60,20.075,51.925,12,42,12z"></path>{" "}
            <path d="M35.707,37.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L41.586,46H18C9.178,46,2,38.822,2,30 c0-3.783,1.359-7.46,3.828-10.354c0.358-0.421,0.309-1.052-0.111-1.41c-0.419-0.359-1.052-0.31-1.41,0.111 C1.529,21.604,0,25.741,0,30c0,9.925,8.075,18,18,18h23.586l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414 C34.488,56.902,34.744,57,35,57s0.512-0.098,0.707-0.293l9-9c0.391-0.391,0.391-1.023,0-1.414L35.707,37.293z"></path>{" "}
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    title: "No Hassle Management",
    text: "With us, you don't have to worry about the intricacies of trip management. We take care of everything, leaving you free to focus on organizing a memorable trip.",
    svg: (
      <svg
        fill="#d897f0"
        viewBox="0 0 56 56"
        width="100%"
        height="100%"
        stroke="#d897f0"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 21.1796 25.8672 C 22.5624 25.8672 23.7109 24.6484 23.7109 22.9375 C 23.7109 21.2266 22.5624 20.0078 21.1796 20.0078 C 19.8202 20.0078 18.6952 21.2266 18.6952 22.9375 C 18.6952 24.6484 19.8202 25.8672 21.1796 25.8672 Z M 34.8905 25.8672 C 36.2733 25.8672 37.4218 24.6484 37.4218 22.9375 C 37.4218 21.2266 36.2733 20.0078 34.8905 20.0078 C 33.5077 20.0078 32.3827 21.2266 32.3827 22.9375 C 32.3827 24.6484 33.5077 25.8672 34.8905 25.8672 Z M 27.9999 39.2968 C 33.6483 39.2968 37.1874 35.2890 37.1874 33.7656 C 37.1874 33.4609 36.9530 33.3203 36.7187 33.5078 C 35.0077 34.9375 32.1249 36.3437 27.9999 36.3437 C 23.8514 36.3437 20.8983 34.8437 19.2577 33.5312 C 19.0234 33.3203 18.7890 33.4609 18.7890 33.7656 C 18.7890 35.2890 22.3280 39.2968 27.9999 39.2968 Z"></path>
        </g>
      </svg>
    ),
  },
];

const Benefits = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Benefits of Partnering with Us</h1>
        <div className={styles.card}>
          {data.map((item) => (
            <div className={styles.cardBody} key={item.id}>
              <div className={styles.imgContainer}>{item.svg}</div>
              <h5 className={styles.cardTitle}>{item.title}</h5>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefits;
