import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import user from "../../Resource/icons/user.png";
import LoaderSpiner from "../Spinner/Loader";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://smr-software-consultancy.herokuapp.com/getReview")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mb-5">
      <h1 className="text-center mt-5 testimonial-heding">What Clint Say About Us</h1>

      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true} interval={2000}>
        {review.map((x) => (
          <>
            <div>
              <img src={x.photo ? x.photo : user} alt="Lodding...." />
              <div className="myCarousel">
                <h3 className="mt-4"> Name: {x.name}</h3>
                {x.company && <h6 className="mt-4"> Company: {x.company}</h6>}

                <p>{x.description}</p>
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
