import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../../App";
import AdminSiteBar from "../../AdminSiteBar/AdminSiteBar";
import "./UserReview.css";
import { useForm } from "react-hook-form";
const UserReview = () => {
  const { loggedInUser } = useContext(userContext);
  const [response, setResponse] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userReview = {
      ...data,
      photo: loggedInUser?.photo,
    };

    fetch("https://smr-software-consultancy.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResponse(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setInterval(() => {
      setResponse(false);
    }, 8000);
  }, [setResponse]);
  return (
    <div className="container-fluid  mb-5 pb-5">
      <div className="row mb-5">
        <div className="col-3">
          <AdminSiteBar />
        </div>
        <div className="col-md-9 bg-light">
          <div className="row">
            <div className="col-12 d-flex ">
              <div className="makeAdminHeader">
                <h1>Review </h1>
              </div>
              <div className="makeAdminHeader">
                <h4 className="text-right">{loggedInUser?.name && loggedInUser.name} </h4>
              </div>
            </div>

            <div className="col-12 mt-5 pt-5">
              {response && <h5 className="text-success">Revew added successfully </h5>}

              <form onSubmit={handleSubmit(onSubmit)} className="d-flex row">
                <div className="name-price col-md-4 col-9">
                  <h6>Name: </h6>
                  <input
                    defaultValue={loggedInUser?.name}
                    type="text"
                    className="form-control"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="name"
                  />
                  {errors.name && <span className="text-danger">Field is required</span>}
                  <h6>Company Name: </h6>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    {...register("company", { required: false })}
                    placeholder="Company Name"
                  />

                  <h6>Description :</h6>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    {...register("description", {
                      required: "Field is required",
                      minLength: {
                        value: 20,
                        message: "Minimum Length  20 character",
                      },
                      maxLength: {
                        value: 120,
                        message: "Max-Length 120 character",
                      },
                    })}
                    placeholder="Description"
                  ></textarea>
                  {errors.description && <span className="text-danger">{errors.description.message}</span>}
                </div>

                <div className="col-md-9">
                  <input className="addservicesBtn" type="submit" value="Add Review" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
