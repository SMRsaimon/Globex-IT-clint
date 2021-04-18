import { useSpring } from "@react-spring/core";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Services.css";

import Bounce from "react-reveal/Bounce";
import { useHistory } from "react-router";
import LoaderSpiner from "../Spinner/Loader";
const Services = () => {
  const [services, setservices] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("https://smr-software-consultancy.herokuapp.com/servicesList")
      .then((res) => res.json())
      .then((data) => {
        setservices(data);
      });
  }, []);

  const hendelBuyServices = (id) => {
    history.push(`/buyServices/${id}`);
  };

  return (
    <div className="container mb-5">
      <Bounce left delay={100} duration={2000}>
        <h2 className="text-center text-heading-services mt-5">
          Offer The Latest Software <br /> And Solutions To Our customers!
        </h2>
      </Bounce>
      {services.length === 0 ? <LoaderSpiner /> : ""}
      <div className="row mt-5 pt-4 ">
        {services.map((x) => (
          <>
            <Bounce right delay={100} duration={2000}>
              <div className="col-md-4 pb-4  ">
                <Card className="servicesContainer m-auto" style={{ width: "18rem" }}>
                  <div className="imgContainer">
                    <Card.Img className="servicesImg" variant="top" src={x.img} />
                  </div>
                  <hr />

                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text className="text-gray">{x.description}</Card.Text>
                    <span className="price">Price :{x.price} $</span> &nbsp;&nbsp;
                    <Button onClick={() => hendelBuyServices(x._id)} className="buyNow">
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Bounce>
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
