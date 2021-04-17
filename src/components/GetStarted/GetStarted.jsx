import React from "react";
import { Card } from "react-bootstrap";
import "./GetStarted.css";
import icon1 from "../../Resource/icons/24-hours-support.png";
import icon2 from "../../Resource/icons/cloud-computing.png";
import icon3 from "../../Resource/icons/computer.png";
import icon4 from "../../Resource/icons/data-server.png";
import Rotate from "react-reveal/Rotate";

const GetStarted = () => {
  const SoftInfo = [
    {
      title: "Software Asset Management",
      description: "All aspects of your software assets including purchasing, deployment & maintenance.",
      img: icon2,
    },
    {
      title: "Privileged Access Management",
      description: "Extend proven Tech best practices to HR, finance, and other service delivery areas.",
      img: icon3,
    },
    {
      title: "Software License Management",
      description: "Build dynamic request templates with associated workflows, and tasks.",
      img: icon1,
    },
    {
      title: "Enterprise Service Management",
      description: "Our technology allows you to offer the latest software to your possible customers!",
      img: icon4,
    },
  ];

  return (
    <div id="getStarted" className="pt-5">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <span className="card-color">Ensure High Availability of Your Services</span>
            <Rotate top left>
              <h1 className="mt-4 pt-3">Improve Efficiency And Provide Better Experience By Our IT Solutions!</h1>
            </Rotate>
            <p className="pt-5">
              Trusted by the world’s best organizations, for 15 years and running, it has been delivering smiles to hundreds of IT advisors,
              developers, users, and business owners. Easy solutions for all difficult IT problems to ensure high availability.
            </p>
            <div className="getdemoBtnContainer mt-5">
              <button className="btn btn-primary p-3">Get Started</button>
              &nbsp; &nbsp;
              <button className="btn btn-outline-primary p-3">Request A Demo</button>
            </div>
            <div className="getStartedContra ">
              <span>
                If you have any questions or need help, feel free to contact with our team, or you can call us any time 01757953084
              </span>
              <button className="btn btn-primary">Contract Us </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {SoftInfo.map((x) => (
                <>
                  <Rotate top right>
                    <div className="col-6 mt-4">
                      <Card className="getStanderd mx-auto mb-4">
                        <div className="getStanderdImgContainer">
                          <Card.Img className="getStanderdImg" variant="top" src={x.img} />
                        </div>
                        <hr />

                        <Card.Body className="cardBody">
                          <Card.Title className="title">{x.title}</Card.Title>
                          <Card.Text className="description">{x.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Rotate>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
