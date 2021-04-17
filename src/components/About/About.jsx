import React from "react";
import "./About.css";
import { BiCheckCircle } from "react-icons/bi";
import aboutBg from "../../Resource/about.jpg";
import Rotate from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div className="container mt-5 mb-5 pb-5">
      <div className="row">
        <div className="col-md-6 img-container">
          <Zoom left>
            <img className="about-img" src={aboutBg} alt="" srcset="" />
          </Zoom>
          <div className="imgBackground"></div>
        </div>
        <div className="col-md-6 mt-5">
          <div>
            <p className="card-color">Improve Efficiency and Provide Better Experiences!</p>
            <Rotate top right delay={100} duration={1000}>
              <h1>Keep Your Business Safe & Ensure High Availability.</h1>
            </Rotate>
          </div>

          <div className="about-description mt-3 pt-3">
            <p className="text-gray about-p1">
              As one of the world’s largest ITService Providers, our deep pool of over 130 certified engineers and IT support staff are
              ready to help.
            </p>
            <p className="text-gray about-p2">
              Provide users with appropriate view and access permissions to requests, problems, changes, contracts, assets, solutions, and
              reports with our experienced professionals.
            </p>
          </div>
          <div className="lets-talk">
            <Rotate bottom right>
              <button className="btn btn-outline-primary" type="button">
                Lets-Talk
              </button>
            </Rotate>
            <div className="about-services-list mt-5">
              <ul>
                <li>
                  <BiCheckCircle className="about-icon-done" /> Delivered in more than 450,000 client’s interactions
                </li>
                <li>
                  <BiCheckCircle className="about-icon-done" /> Provided by experts to help challenge critical activities
                </li>
                <li>
                  <BiCheckCircle className="about-icon-done" /> Complemented with peer perspectives and advice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
