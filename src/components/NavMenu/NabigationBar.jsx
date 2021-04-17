import React, { useContext } from "react";
import "./NavigationBar.css";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { MdFormatAlignLeft } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import img from "../../Resource/icons/user.png";
import { userContext } from "../../App";

const NabigationBar = ({ hendelLogOut, showSidebar }) => {
  const { loggedInUser } = useContext(userContext);

  return (
    <>
      <Nav className="NabigationBar">
        <img
          className="brand-img"
          src="https://expert-themes.com/newwp/globex/wp-content/uploads/2020/11/logo.svg"
          alt="Brand Icon"
          srcset=""
        />
        <MdFormatAlignLeft onClick={showSidebar} className="toggleButton" />
        <ul className="NabigationBar-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="text-danger">
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          {loggedInUser?.email ? (
            <li className="LogOut">
              <Link onClick={hendelLogOut}>
                <IoIosLogOut className="LogOutIcon" /> LogOut
              </Link>
            </li>
          ) : (
            <li className="">
              <Link to="/logIn">
                <FiLogIn className="logInIcon" /> LogIn
              </Link>
            </li>
          )}

          <li className="user-img-container">
            <img src={loggedInUser?.photo ? loggedInUser.photo : img} alt="" srcset="" />
            {loggedInUser?.name && <span> {loggedInUser.name}</span>}
          </li>
        </ul>
      </Nav>
    </>
  );
};

export default NabigationBar;
