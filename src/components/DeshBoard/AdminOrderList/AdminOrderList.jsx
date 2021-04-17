import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userContext } from "../../../App";
import AdminSiteBar from "../AdminSiteBar/AdminSiteBar";
import "./AdminOrderList.css";

const AdminOrderList = () => {
  const { loggedInUser } = useContext(userContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                    <th>Services</th>
                    <th>Pay With</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <select className="form-controll" {...register("status")}>
                          <option value="none" selected disabled hidden>
                            Pending
                          </option>
                          <option value="Pending" className="pending">
                            Pending
                          </option>
                          <option value="1" className="done">
                            Done
                          </option>
                          <option value="On going" className="On-going">
                            On going{" "}
                          </option>
                        </select>
                        <input className="statusBtn" type="submit" value="Change" />
                      </form>
                    </td>
                  </tr>
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
