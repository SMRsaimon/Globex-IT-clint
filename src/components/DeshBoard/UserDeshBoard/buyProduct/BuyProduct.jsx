import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../../../../App";
import AdminSiteBar from "../../AdminSiteBar/AdminSiteBar";
import "./BuyProduct.css";
import ProcessPayment from "../ProcessPayment/ProcessPayment";

const BuyProduct = () => {
  const { id } = useParams();
  const { loggedInUser } = useContext(userContext);

  const [orderProduct, setOrderProduct] = useState({});

  useEffect(() => {
    fetch(`https://smr-software-consultancy.herokuapp.com/order/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderProduct(data);
      });
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <AdminSiteBar></AdminSiteBar>
        </div>
        <div className="col-md-9 buyProduct-container">
          <div className="row">
            <div className="col-12 d-flex ">
              <div className="makeAdminHeader">
                <h1>Booking </h1>
              </div>
              <div className="makeAdminHeader">
                <h4 className="text-right">{loggedInUser?.name && loggedInUser.name} </h4>
              </div>
            </div>
            <div className="col-md-5">
              <ProcessPayment orderProduct={orderProduct} loggedInUser={loggedInUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
