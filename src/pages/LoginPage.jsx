import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Endpoints from "../api/Endpoints";

function LoginPage() {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    axios
      .post(Endpoints.USER_LOGIN, values)
      .then(
        (response) => {
          // console.log(response);
          console.log(response.data);
          setRequestResponse({
            textMessage: "Login Successful, Thank you!",
            alertClass: "alert alert-success",
          });
          localStorage.setItem("token", response.data.token);

          localStorage.setItem("username", JSON.stringify(response.data.user));

          navigate("/");
        },
        (error) => {
          console.log(error);
          setRequestResponse({
            textMessage: error.response.data,
            alertClass: "alert alert-danger text-capitalize",
          });
        }
      )
      .catch((errors) => console.log(errors));
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must contain minimum 6 characters"),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-wrapper">
              <h2 className=" text-center">Login</h2>
              <div className={requestResponse.alertClass} role="alert">
                {requestResponse.textMessage}
              </div>
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
                        <label htmlFor="username">Username</label>
                        <Field
                          type="text"
                          name="username"
                          id="username"
                          className={
                            formik.touched.username && formik.errors.username
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="username">
                          {(errorMessage) => (
                            <small className=" text-danger">
                              {errorMessage}
                            </small>
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
                            <small className="text-danger">
                              {errorMessage}
                            </small>
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
                New User?
                <NavLink to="/register"> Click here</NavLink>
              </p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
