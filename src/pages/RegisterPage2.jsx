import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import Navbar from '../components/Navbar';
import Endpoints from '../api/Endpoints';

function RegisterPage2() {
    const navigate = useNavigate();
    const initialValues = {
        name: "",
        userName:"",
        email: "",
        address:"",
        mobile: "",
        password: "",
      }
    const onSubmit=(values)=>{
        axios
      .post(Endpoints.REGISTER_USER, values)
      .then(
        (response) => {
          console.log(response.data);
          navigate("/")

        },
        (error) => {
          console.log(error);
        } 
      )
      .catch((errors) => console.log(errors));
    }

    const validationSchema = Yup.object({
    name: Yup.string().required("Firstname is required"),
    userName:Yup.string().required("Username is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Must be a valid email address"),
    address:Yup.string().required("Address is required"),
    mobile: Yup.number().required("Mobile number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum 6 characters required"),
  });
  return (
    <>
    
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="form-wrapper">
            <h2 className=" text-center">Register with us</h2>
            
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className={
                          formik.touched.name && formik.errors.name
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="name">
                        {(errorMessage) => (
                          <small className=" text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="userName">Usename</label>
                      <Field
                        type="text"
                        name="userName"
                        id="userName"
                        className={
                          formik.touched.userName && formik.errors.userName
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="userName">
                        {(errorMessage) => (
                          <small className=" text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="text"
                        name="email"
                        id="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className=" text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <Field
                        type="text"
                        name="address"
                        id="address"
                        className={
                          formik.touched.address && formik.errors.address
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="address">
                        {(errorMessage) => (
                          <small className=" text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile</label>
                      <Field
                        type="number"
                        name="mobile"
                        id="mobile"
                        className={
                          formik.touched.mobile && formik.errors.mobile
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="mobile">
                        {(errorMessage) => (
                          <small className=" text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger">{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      value="login"
                      className="btn btn-primary btn-block mt-3"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className=" text-center">
            Already Registered ?
              <NavLink to="/login"> Click here</NavLink>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    </>
  )
}

export default RegisterPage2