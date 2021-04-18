import React, { useContext, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './SideBar.css';
import { IconContext } from 'react-icons';
import NabigationBar from './NabigationBar';
import { FiLogIn } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import img from "../../Resource/icons/user.png";
import { userContext } from '../../App';
import { handleSignOut, initializeLoginFramework } from '../LogInManager/LogInManager';
function SideBar() {
  initializeLoginFramework()
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { loggedInUser, setLoggedInUser, setIsAdmin } = useContext(userContext)

  // Hendel signOut
  const hendelLogOut = () => {
    handleSignOut().then((res) => {
      localStorage.removeItem("userInfo")
      setIsAdmin(false)
      setLoggedInUser({})

    });
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <NabigationBar hendelLogOut={hendelLogOut} showSidebar={showSidebar} ></NabigationBar>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='SideBar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {

              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}


            {loggedInUser?.email ? <li className="LogOut">
              <Link onClick={hendelLogOut}>
                <IoIosLogOut className="LogOutIcon" /> LogOut
             </Link>
            </li>
              : <li className="LogIn">
                <Link to="/logIn">
                  <FiLogIn className="logInIcon" /> LogIn
             </Link>
              </li>

            }


            <li className="user-img-container mt-3">
              <img src={loggedInUser?.photo ? loggedInUser.photo : img} alt="" srcset="" />

              {loggedInUser?.name && <span> {loggedInUser.name}</span>}

            </li>

          </ul>

        </nav>

      </IconContext.Provider>
    </>
  );
}

export default SideBar;
