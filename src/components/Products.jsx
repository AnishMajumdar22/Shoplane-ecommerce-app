import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

function Products(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, image, price, title } = props.data;
  

  const handleSubmitView = () => {
    navigate("/product/details/" + id);
  };

  const addToCart = (products) => {
    dispatch(add(products));
    // toast notification
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
        <img src={image} className="card-img-top object-fit-contain" alt="img" />
        <div className="card-body">
          <h5 className="card-title mb-0">{title.substring(0, 12)}...</h5>
          <h2>
            <span>&#36;</span> {price}
          </h2>
          <div className="row p-2">
            <button
              type="button"
              className="btn btn-primary btn-block px-3"
              onClick={handleSubmitView}
            >
              <i className="bi bi-eye"></i> View Item
            </button>
            <br />
            <button
              type="button"
              className="btn btn-outline-primary btn-block mt-2"
              onClick={() => addToCart(props.data)}
            >
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
              <i className="bi bi-cart-plus-fill"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
