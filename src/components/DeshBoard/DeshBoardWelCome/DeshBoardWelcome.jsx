import React, { useContext } from "react";
import { userContext } from "../../../App";
import AdminSiteBar from "../AdminSiteBar/AdminSiteBar";

import "./DeshBoardWelcome.css";

const DeshBoardWelcome = () => {
  const { loggedInUser, isAdmin } = useContext(userContext);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <AdminSiteBar />
        </div>
        <div className="col-md-9 bg-light">
          <div className="row">
            <div className="col-12  ">
              <div className="makeAdminHeader">
                <h3>
                  {isAdmin ? <> Admin </> : <>User </>} <spn className="text-text-primary">...</spn> DeshBoard{" "}
                </h3>
              </div>
            </div>
            <div className="col-md-6 mt-5 pt-5">
              <h4 className="text-center">
                Hi, {loggedInUser?.name && loggedInUser.name} welcome to {isAdmin ? <> Admin </> : <>User </>} DeshBoard{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeshBoardWelcome;
