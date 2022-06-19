import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Message from "./message";
import { signup } from "./helper";
import "./signup.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "#096a87",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  color: "white",
};
//
const Signup = ({ open, handleClose }) => {
  const [values, setValues] = useState({
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const {
    username,
    firstname,
    lastname,
    phone,
    email,
    password,
    error,
    success,
  } = values;
  const [loading, setLoading] = useState(false);
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ username, firstname, lastname, phone, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          // console.log(data);
          setValues({
            ...values,
            username: "",
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            password: "",
            error: "",
            success: "Your Account has been created. Please signin.",
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        }
      })
      .catch(console.log("Error in signup"));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Hello">
          <section className="vh-50">
            <div className="container h-80">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <Message open={error} message={error} severity={"error"} />
                <Message
                  open={success}
                  message={success}
                  severity={"success"}
                />
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bolder mb-5 mx-1 mx-md-4 mt-4 laura">
                            Register Now
                          </p>

                          <form className="mx-1 mx-md-4">
                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label
                                className="text-light"
                                style={{ fontWeight: "bolder" }}
                              >
                                Username
                              </label>
                              <input
                                style={{ marginLeft: "25px" }}
                                className="form-control"
                                onChange={handleChange("username")}
                                type="text"
                                value={username}
                              />
                            </div>

                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label
                                className="text-light"
                                style={{ fontWeight: "bolder" }}
                              >
                                Firstname
                              </label>
                              <input
                                style={{ marginLeft: "25px" }}
                                className="form-control"
                                onChange={handleChange("firstname")}
                                type="text"
                                value={firstname}
                              />
                            </div>

                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label
                                className="text-light"
                                style={{ fontWeight: "bolder" }}
                              >
                                Lastname
                              </label>
                              <input
                                style={{ marginLeft: "25px" }}
                                className="form-control"
                                onChange={handleChange("lastname")}
                                type="text"
                                value={lastname}
                              />
                            </div>

                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label
                                className="text-light"
                                style={{ fontWeight: "bolder" }}
                              >
                                Phone
                              </label>
                              <input
                                style={{ marginLeft: "50px" }}
                                className="form-control"
                                onChange={handleChange("phone")}
                                type="tel"
                                value={phone}
                              />
                            </div>

                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label
                                className="text-light"
                                style={{ fontWeight: "bolder" }}
                              >
                                Email
                              </label>
                              <input
                                style={{ marginLeft: "53px" }}
                                className="form-control"
                                onChange={handleChange("email")}
                                type="email"
                                value={email}
                              />
                            </div>

                            <div
                              className="form-group"
                              style={{ marginBottom: "10px" }}
                            >
                              <label
                                className="text-light"
                                style={{ fontWeight: "bolder" }}
                              >
                                Password
                              </label>
                              <input
                                style={{ marginLeft: "25px" }}
                                onChange={handleChange("password")}
                                className="form-control"
                                type="password"
                                value={password}
                              />
                            </div>
                            <button
                              onClick={onSubmit}
                              style={{
                                backgroundColor: "orange",
                                border: "1px solid red",
                                padding: "8px",
                                borderRadius: "5px",
                                width: "70%",
                                marginLeft: "30px",
                              }}
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
};
export default Signup;
