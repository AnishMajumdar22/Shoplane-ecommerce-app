import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addWish, removeWish } from "../redux/store/wishSlice";
import { add } from "../redux/store/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Wishlist() {
  const productOnWishlist = useSelector((state) => state.wishlist);
  // console.log(productOnWishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitView = () => {
    productOnWishlist.map((item)=>{
      let items=item.id
      navigate("/product/details/" + items);
    })
  };
  const addToCart = (products) => {
    dispatch(add(products));
  };
  const handleRemove = (id) => {
    dispatch(removeWish(id));
  };
  return (
    <>
      <div className="container p-5">
        <h2 className="text-center">My Wishlist</h2>
        <p className="mb-5 text-center fw-bold fs-5">
          <i className="bi bi-box2-heart"> {productOnWishlist.length}</i>{" "}
          items in your cart
        </p>
        <div className="row mt-5 mx-2">
          {productOnWishlist &&
            productOnWishlist.map((products) => (
              <div className="col-md-3 mb-4 text-center">
                <div className="card">
                  <img
                    src={products.image}
                    className="card-img-top object-fit-contain"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{products.title.substring(0, 12)}...</h5>

                    <h2>
                      <span>&#36;</span> {products.price}
                    </h2>
                    <button
                      type="button"
                      className="btn btn-primary btn-block w-100"
                      onClick={handleSubmitView}
                    >
                      <i className="bi bi-eye"></i> View Item
                    </button>
                    <br />
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-block mt-2 w-100"
                      onClick={() => addToCart(products)}
                    >
                      <i className="bi bi-cart-plus-fill"></i> Add to Cart
                    </button>
                    <br />
                    <button
                      className="btn btn-outline-danger w-100 mt-2"
                      onClick={() => handleRemove(products.id)}
                    >
                      <i className="bi bi-trash"> Remove from wishlist</i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
