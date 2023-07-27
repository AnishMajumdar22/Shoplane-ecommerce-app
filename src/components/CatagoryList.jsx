import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import { Link } from "react-router-dom";
// import CategoryPage from "./CategoryPage";


function CatagoryList() {
  const [catagories, setCatagories] = useState([]);

  const getData = () => {
    axios
      .get(Endpoints.ALL_CATEGORIES)
      .then((response) => {
        // console.log(response.data);
        setCatagories(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className=" d-flex "
          style={{ justifyContent: "center", gap: "12px" }}
        >
          {catagories.map((cat, index) => (
            <Link to={`/${cat}`}>
              <button
                type="button"
                key={index}
                className="btn btn-outline-secondary text-capitalize "
                
              >
                {cat}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatagoryList;
