import React, { useContext, useEffect, useState } from "react";
import "./AdminDeshBoard.css";
import AdminSiteBar from "../AdminSiteBar/AdminSiteBar";
import { useForm } from "react-hook-form";
import { userContext } from "../../../App";
const AdminDeshBoard = () => {
  const [admin, setAdmin] = useState(false);
  const { loggedInUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://smr-software-consultancy.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  };

  useEffect(() => {
    setInterval(() => {
      setAdmin(false);
    }, 5000);
  }, [setAdmin]);

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
                <h1>Make Admin </h1>
              </div>
              <div className="makeAdminHeader">
                <h4 className="text-right">{loggedInUser?.name && loggedInUser.name} </h4>
              </div>
            </div>
            <div className="col-md-6 mt-5 pt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                {admin && <h5 style={{ color: "green" }}> Admin Added SuccessFully </h5>}

                <label className="adminLabelEmail" id="email">
                  Email
                </label>
                <br></br>
                {errors.email && <span className="text-danger">Email is required</span>}
                <br></br>
                <input
                  className="inputAdminEmail"
                  placeholder="smr@xyz.com"
                  type="email"
                  name="email"
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                <input className="inputAdminButton" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeshBoard;
