import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminSiteBar.css";
import * as AiIcons from "react-icons/ai";
import { userContext } from "../../../App";

const AdminSiteBar = () => {
  const { isAdmin } = useContext(userContext);

  return (
    <div className="deshboard">
      <ul>
        <li className="deshboardLogoContainer">
          <Link to="/">
            <img className="card-img-top" src="https://expert-themes.com/newwp/globex/wp-content/uploads/2020/11/logo.svg" alt="profile" />
          </Link>
        </li>

        {isAdmin ? (
          <>
            {" "}
            <li>
              <Link to="/addminOrderList"> Order List</Link>
            </li>
            <li>
              <Link to="/addProduct">Add product</Link>
            </li>
            <li>
              <Link to="/addAdmin">Make Admin</Link>
            </li>
            <li>
              <Link to="/manageProduct">Manage Products</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/bookingList">booking List </Link>
            </li>
            <li>
              <Link to="/userReview">Review</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default AdminSiteBar;
