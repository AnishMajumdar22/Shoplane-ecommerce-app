import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import { useNavigate, useParams } from "react-router-dom";
import { add } from "../redux/store/cartSlice";
import { addWish } from "../redux/store/wishSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const addToWishlist = (products) => {
    dispatch(addWish(products));
    // console.log(product);
    toast.success("Item added to wishlist", {
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
  const { id } = useParams();
  const getData = () => {
    axios
      .get(Endpoints.SINGLE_PRODUCT_BY_ID + id)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((errors) => console.log(errors));
  };
  useEffect(() => {
    getData();
  }, [id]);
  // var Indprice = Math.round(product.price * 35) + ".00";
  const handleClick = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="container w-auto">
        <div
          className="wrapper"
          style={{ padding: "40px", marginTop: "20px", borderRadius: "11px" }}
        >
          <div className="row">
            <div className="col-md-6">
              <img
                src={product.image}
                alt=""
                className="img-fluid"
                height="300px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className=" text-uppercase text-black-50">
                {product.category}
              </h4>
              <h1 className=" display-5">{product.title}</h1>
              <p className=" lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className="bi bi-star-fill p-1"></i>
                {/* <i className="bi bi-star-fill p-1"></i> ({product.rating.count}) */}
              </p>
              <h3 className="display-6 fw-bold my-4">
                <span>&#36;</span>
                {product.price}
              </h3>
              <p className="lead">{product.description}</p>
              <button
                type="button"
                className="btn btn-outline-secondary px-4 py-2"
              >
                <i
                  className="bi bi-box-arrow-in-up"
                  style={{ fontWeight: "20px" }}
                  onClick={() => addToCart(product)}
                >
                  {" "}
                  Add to Cart
                </i>
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
              <button
                type="button"
                className="btn btn-secondary mx-2 py-2 px-3"
                onClick={handleClick}
              >
                <i className="bi bi-cart4" style={{ fontWeight: "20px" }}>
                  {" "}
                  Go to Cart
                </i>
              </button>
              <button
                className=" btn btn-outline-secondary py-2"
                id="wishlist-btn"
                onClick={() => {
                  addToWishlist(product);
                }}
              >
                <i
                  className="bi bi-suit-heart-fill"
                  style={{ fontWeight: "20px" }}
                >
                  Add to wishlist
                </i>
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
    </>
  );
}

export default ProductDetailsPage;
