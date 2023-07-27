import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbar() {
  const cartProducts = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/cart");
  };
  // login logout 
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [loginStatus]);
  const onLogoutHandler = () => {
    localStorage.clear();
    setLoginStatus(false);
    navigate("/login");
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="light"
      style={{ height: "80px" }}
    >
      <div className="container-fluid py-2">
        <NavLink className="navbar-brand" to="/" style={{ fontSize: "30px" }}>
          SHOPLANE
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ paddingLeft: "435px" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                id="home"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="wrapper-navbar">
          <div className="btn-group ">
            <NavLink to="/wishlist">
              <i
                className="bi bi-suit-heart-fill p-4 mt-3"
                id="wishlist-link"
                style={{ fontSize: "25px", color: "#ff3333" }}
              ></i>
            </NavLink>
            <div className="btn-group">
              {loginStatus ? (
                <NavLink className="btn btn-danger" onClick={onLogoutHandler}>
                  Logout
                </NavLink>
              ) : (
                <div>
                  <button
                    type="button"
                    className="btn btn-outline-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle"> Login or Signup</i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="dropdown-item" to="/login">
                        <i className="bi bi-box-arrow-in-right"> Login</i>
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/register">
                        <i className="bi bi-pencil-square"> Signup</i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <span className="m-5">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleSubmit}
            >
              <i
                className="bi bi-cart4 align-content-center"
                style={{ fontSize: "20px" }}
              >
                {" "}
                {cartProducts.length}
              </i>
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
