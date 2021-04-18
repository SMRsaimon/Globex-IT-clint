import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { userContext } from "../../../../App";
import LoaderSpiner from "../../../Spinner/Loader";
import AdminSiteBar from "../../AdminSiteBar/AdminSiteBar";
import "./BookingList.css";

const BookingList = () => {
  const { loggedInUser } = useContext(userContext);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch(`https://smr-software-consultancy.herokuapp.com/userBookingServices?email=${loggedInUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }, [loggedInUser?.email]);

  return (
    <>
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
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Email ID</th>
                      <th>Adress</th>
                      <th>Order Date</th>
                      <th>Services</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList.length === 0 ? (
                      <p className="bookingSpinner">
                        {" "}
                        <LoaderSpiner />{" "}
                      </p>
                    ) : (
                      orderList?.map((x) => (
                        <>
                          <tr>
                            <td>{x?.email}</td>
                            <td>{x?.address}</td>
                            <td>{new Date().toDateString(x.date)}</td>
                            <td>{x.title}</td>
                            <td>$ {x.price}</td>
                            <td
                              className={
                                x.status === "Pending"
                                  ? "pendding"
                                  : "" || x.status === "Done"
                                  ? "done"
                                  : "" || x.status === "On going"
                                  ? "onGoing"
                                  : ""
                              }
                            >
                              $ {x.status}
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
    </>
  );
};

export default BookingList;
