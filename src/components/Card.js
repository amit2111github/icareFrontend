import React, { useState, useEffect } from "react";
import ImageHelper from "./Imagehelper";
// import { Redirect } from 'react-router-dom'
import { removeItemFromCart } from "../auth/helper";
import { API } from "../backend";
import Button from "@mui/material/Button";

const Card = ({
  product,
  id,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirectUpdate, setRedirectUpdate] = useState(false);

  const updateBtn = () => {
    return (
      <button
        className="btn btn-success btn-sm rounded-2"
        type="button"
        data-toggle="tooltip"
        data-placement="top"
        title="Edit"
        onClick={handleUpdate}
      >
        <i className="fa fa-edit"> Update</i>
      </button>
    );
  };

  const handleUpdate = () => {
    setRedirectUpdate(true);
  };

  // const getARedirect = (redirect) => {
  //   if (redirectUpdate) {
  //     return <Redirect to={'/meal/update/' + product._id} />
  //   }
  // }

  const deleteBtn = () => {
    return (
      <Button
        type="button"
        data-toggle="tooltip"
        data-placement="top"
        title="Delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red" }}
        variant="filled"
      >
        <i className="fa fa-trash"> Delete</i>
      </Button>
    );
  };

  const handleDelete = () => {
    return fetch(`${API}/meal/${product._id}/${id}`, { method: "DELETE" })
      .then((response) => {
        setReload(!reload);
        return response.json();
      })
      .catch((err) => console.log(err));

    setReload(!reload);
  };

  return (
    <div className="col-md-5">
      <div
        className="card text-black border border-info"
        style={{
          backgroundColor: "#e9ecef",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div className="card-header lead">
          <h2
            style={{
              padding: "10px",
              fontWeight: "bolder",
              color: "red",
            }}
          >
            {product.foodname}
          </h2>
        </div>
        <div
          className="card-body"
          style={{
            padding: "10px",
            fontWeight: "bolder",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              padding: "10px",
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ImageHelper foodname={product.foodname} />
          </div>
          <h3
            className="lead bg-success font-weight-normal text-wrap"
            style={{
              marginTop: "20px",
              borderRadius: "5px",
              fontWeight: "grey",
            }}
          >
            {product.description}
          </h3>

          <div className="d-flex justify-content-around">
            <h3>Clories : {product.calorie}</h3>
          </div>

          <div className="card-header d-flex justify-content-around">
            {deleteBtn()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
