import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/store/cartSlice";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
// import CategoryProducts from "./CategoryProducts";

function CategoryPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categoryItems, setCategoryItems] = useState([]);
  const getData = () => {
    axios
      .get(Endpoints.ALL_PRODUCTS_SPECIFIC_CATEGORY + category)
      .then((response) => {
        console.log(response.data);
        setCategoryItems(response.data);
      })
      .catch((errors) => console.log(errors));
  };
  useEffect(() => {
    getData();
  }, [category]);

  return (
    <>
      <Header />
      <div className="container">
        <h2
          className="text-center text-capitalize p-3"
          style={{ marginRight: "85px" }}
        >
          {category}
        </h2>
        <div className="row mt-5 mx-2">
          {categoryItems.map((catItems) => {
            const { id, image, price, title } = catItems;
            const handleSubmitView = () => {
              navigate("/product/details/" + id);
            };

            const addToCart = (products) => {
              dispatch(add(products));
              toast.success("Item added to cart", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            };
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4 text-center">
                <div className="card">
                  <img
                    src={image}
                    className="card-img-top object-fit-contain"
                    alt="img"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {title.substring(0, 12)}...
                    </h5>
                    <h2>
                      <span>&#36;</span> {price}
                    </h2>
                    <div className="row p-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-block px-3"
                        onClick={handleSubmitView}
                      >
                        <i className="bi bi-eye"> </i> View Item
                      </button>
                      <br />
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-block mt-2"
                        onClick={() => addToCart(catItems)}
                      >
                        <i className="bi bi-cart-plus-fill"></i> Add to Cart
                        <ToastContainer
                          position="bottom-right"
                          autoClose={3000}
                          hideProgressBar
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
