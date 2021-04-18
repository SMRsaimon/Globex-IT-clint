import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userContext } from "../../../App";
import LoaderSpiner from "../../Spinner/Loader";
import AdminSiteBar from "../AdminSiteBar/AdminSiteBar";
import "./AdminOrderList.css";

const AdminOrderList = () => {
  const { loggedInUser } = useContext(userContext);

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("https://smr-software-consultancy.herokuapp.com/adminOrderList")
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }, []);

  const hendelStatus = (e, id) => {
    const update = e.target.value;

    const status = {
      update,
    };

    fetch(`https://smr-software-consultancy.herokuapp.com/update/status/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
                <h1>Order List </h1>
              </div>
              <div className="makeAdminHeader">
                <h4 className="text-right">{loggedInUser?.name && loggedInUser.name} </h4>
              </div>
            </div>
            <div className="col-md-11 mt-5 pt-5">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Order Date</th>
                    <th>Services</th>
                    <th>Pay With</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.length === 0 ? (
                    <LoaderSpiner />
                  ) : (
                    orderList.map((x) => (
                      <>
                        <tr>
                          <td>{x.userName}</td>
                          <td>{x.email}</td>
                          <td>{new Date().toDateString(x.date)}</td>
                          <td>{x.title}</td>
                          <td>{x.card}</td>
                          <td>
                            <div>
                              <select onClick={(e) => hendelStatus(e, x._id)} className="form-controll">
                                <option value="none" selected disabled hidden>
                                  {x.status}
                                </option>
                                <option value="Pending" className="pending">
                                  Pending
                                </option>
                                <option value="Done" className="done">
                                  Done
                                </option>
                                <option value="On going" className="On-going">
                                  On going
                                </option>
                              </select>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderList;
