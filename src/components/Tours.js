import React from "react";
import "./components.css";
const Tours = () => {
  return (
    <div className="tours">
      <p className="Tour_title ">Tours</p>
      <div className="container_tours">
        <div className="tour_card">
          <img src="./assets/bali_image.svg"  alt="bali" />
          <div className="text__container">
            <p className="title_heading">7 Days tour in Bali</p>
            <p className="sub__heading">
              Lorem ipsum dolor sit amet consectetur. Odio sed dictum
              sollicitudin egestas sagittis facilisis id. Sapien suspendisse
              velit parturient molestie. Cum sed feugiat neque diam id erat
              elementum habitant. Dictum ridiculus orci ac lobortis massa
              habitant leo.
            </p>
            <button className="tour_btn price">$1999-2999</button>
            <button className="tour_btn">contact</button>
          </div>
          
        </div>
        <div className="tour_card">
          <img src="./assets/Portugal_image.svg"  alt="bali" />
          <div className="text__container">
            <p className="title_heading">7 Days tour in Portugal</p>
            <p className="sub__heading">
              Lorem ipsum dolor sit amet consectetur. Odio sed dictum
              sollicitudin egestas sagittis facilisis id. Sapien suspendisse
              velit parturient molestie. Cum sed feugiat neque diam id erat
              elementum habitant. Dictum ridiculus orci ac lobortis massa
              habitant leo.
            </p>
            <button className="tour_btn price">$2999-3999</button>
            <button className="tour_btn">contact</button>
          </div>
          
        </div>
        <div className="tour_card">
          <img src="./assets/Veitnam_image.svg" alt="bali" />
          <div className="text__container">
            <p className="title_heading">7 Days tour in Vietnam</p>
            <p className="sub__heading">
              Lorem ipsum dolor sit amet consectetur. Odio sed dictum
              sollicitudin egestas sagittis facilisis id. Sapien suspendisse
              velit parturient molestie. Cum sed feugiat neque diam id erat
              elementum habitant. Dictum ridiculus orci ac lobortis massa
              habitant leo.
            </p>
            <button className="tour_btn price">$1999-2599</button>
            <button className="tour_btn">contact</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Tours;
