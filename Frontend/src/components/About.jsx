import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
          At FOOD COURT, we believe that good food
           has the power to bring people together and create lasting
            memories. Our culinary journey began with a simple 
            idea to provide our community with a place where they 
            can savor delicious, thoughtfully crafted dishes in a warm and inviting atmosphere.
            Step into our restaurant, and you'll be greeted by an ambiance that reflects our
             dedication to hospitality. Our team is not just here to serve you; we're here to 
             create an unforgettable dining experience. Whether you're celebrating a special 
             occasion, enjoying a meal with family, or simply indulging in a solo culinary 
             escape, FOOD COURT is the perfect setting.
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
