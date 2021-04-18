import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import AdminSiteBar from "../AdminSiteBar/AdminSiteBar";
import "./ManageProduct.css";

const ManageProduct = () => {
  const { loggedInUser } = useContext(userContext);
  const [manageProduct, setmanageProduct] = useState([]);
  const [deleteServices, setDeleteServices] = useState(false);

  useEffect(() => {
    fetch("https://smr-software-consultancy.herokuapp.com/servicesList")
      .then((res) => res.json())
      .then((data) => {
        setmanageProduct(data);
      });
  }, []);

  const hendelProductDelete = (id) => {
    fetch(`https://smr-software-consultancy.herokuapp.com/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDeleteServices(data);
      });
  };
  if (deleteServices) {
    fetch("https://smr-software-consultancy.herokuapp.com/servicesList")
      .then((res) => res.json())
      .then((data) => {
        setmanageProduct(data);
      });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <AdminSiteBar />
        </div>
        <div className="col-md-9 bg-light">
          <div className="row">
            <div className="col-12 d-flex ">
              <div className="makeAdminHeader">
                <h1>Manage Product </h1>
              </div>
              <div className="makeAdminHeader">
                <h4 className="text-right">{loggedInUser?.name && loggedInUser.name} </h4>
              </div>
            </div>
            <div className="col-md-11 mt-5 pt-5 row">
              {manageProduct.map((x) => (
                <>
                  <div className="col-md-5 mb-5 p-5 ml-3 services-container">
                    <div className="">
                      <img className="manage-img" src={x.img} alt="" srcset="" />
                    </div>
                    <div className="">
                      <h3>{x.name}</h3>
                      <br />
                      <h4>Price: {x.price}</h4>
                      <br />
                    </div>
                    <br />
                    <div className="">
                      <button onClick={() => hendelProductDelete(x._id)} className="btn btn-danger">
                        Delete Services
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
