import React from "react";
import "./components.css";
const About = () => {
  return (
    <div className="about_us">
      <h1 className="Tour_title">About us</h1>
      <div className="text_box">
        We are a main online travel organization in America giving the ‘best as
        far as a class can tell with the objective to be ‘ America ‘s Travel
        Planner.’ Through our site, www.travelmate.com, our versatile
        applications, and our other related stages, recreation, and business
        voyagers can investigate, explore, analyze costs and book an extensive
        variety of administrations taking into account their movement needs.
        Since our origin in 2006, in excess of 7 million clients have utilized
        at least one of our exhaustive travel-related administrations, which
        incorporate local and global air ticketing, lodging appointments,
        homestays, occasion bundles, transport ticketing, rail ticketing,
        exercises, and subordinate administrations. With more than 83,000 inns
        contracted crosswise over America, we are America’s biggest stage for
        residential lodgings. A solid and “believed” travel brand of America,
        our qualities incorporate a vast and faithful client base, a
        multi-channel stage for relaxation and business explorers, and a
        powerful portable eco-framework for a range of voyagers and providers. A
        solid innovation stage intended to convey an abnormal state of
        adaptability and advancement and a prepared senior supervisory crew,
        including industry officials with profound roots in the movement
        business in America and abroad.
      </div>
      <div className="about_container">
        <section className="left section">
          <img src="./assets/pexels.jpg" alt="" />
        </section>
        <section className="right section">
          <h1>
            Travel Mate wants to offer you the best experiences and memories of
            your life!
            <span className="subheading">Come Travel with us</span>
          </h1>
        </section>
      </div>
    </div>
  );
};

export default About;
