import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Endpoints from "../api/Endpoints";

function RegisterPage() {

  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(Endpoints.REGISTER_USER, values) 
      .then(
        (response) => {
          console.log(response.data)
        },
        (error) => {
          console.log(error);

        }
      )
      .catch((errors) => console.log(errors));
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Firstname is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Must be a valid email address"),
    mobile: Yup.number().required("Mobile number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum 6 characters required"),
  });
  const initialVal = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialVal,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div
            className="form-wrapper"
            style={{
              backgroundColor: "whitesmoke",
              padding: "40px",
              marginTop: "50px",
              borderRadius: "10px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            
            <h2 className="text-center">Register</h2>

            <hr />
            <form onSubmit={formik.handleSubmit}>
              {" "}
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  } 
                  value={formik.values.firstName}
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? ( 
                  <small className=" text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className=" text-danger">{formik.errors.email}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <small className=" text-danger">{formik.errors.mobile}</small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className=" text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block mt-4"
                disabled={!formik.isValid}
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered ? <NavLink to="/login">Click here</NavLink>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default RegisterPage;
