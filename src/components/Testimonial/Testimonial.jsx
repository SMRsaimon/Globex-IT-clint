import React, { useState } from "react";
import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import user from "../../Resource/icons/user.png";

const Testimonial = () => {
  const count = [1, 2, 3, 4];
  return (
    <div className="container mb-5">
      <h1 className="text-center mt-5 testimonial-heding">What Clint Say About Us</h1>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={2000}>
        {count.map((x) => (
          <>
            <div>
              <img src={user} alt="" />
              <div className="myCarousel">
                <h3 className="mt-4"> Name: Shirley Fultz</h3>

                <p>
                  It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site
                </p>
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
