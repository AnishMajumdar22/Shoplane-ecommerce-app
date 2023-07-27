import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  remove,
} from "../redux/store/cartSlice";

function Cart() {
  const productOnCart = useSelector((state) => state.cart);
  // console.log(productOnCart);
  const dispatch = useDispatch();

  const calculateSubtotal = () => {
    return productOnCart.reduce(
      (total, item) => Math.round(total + item.price * item.quantity),
      0
    );
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
              <h3 className="display-5 mb-2 text-center pb-4">Shopping Cart</h3>
              <p className="mb-5 text-center fw-bold fs-5">
                <i className="bi bi-box-seam-fill"> {productOnCart.length}</i>{" "}
                items in your cart
              </p>
              <table
                id="shoppingCart"
                className="table table-condensed table-responsive"
              >
                <thead>
                  <tr className="p-5">
                    <th style={{ width: "60%" }}>Product</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "13%", paddingLeft: "30px" }}>
                      Quantity
                    </th>
                    <th style={{ width: "16%" }}>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {productOnCart.map((products) => (
                    <tr key={products.id}>
                      <td data-th="Product">
                        <div className="row">
                          <div className="col-md-3 text-left">
                            <img
                              src={products.image}
                              alt="image"
                              className="img-fluid d-none d-md-block rounded mb-2 shadow "
                              style={{ height: "160px", width: "100%" }}
                            />
                          </div>
                          <div className="col-md-9 text-left mt-sm-2">
                            <h4>{products.title}</h4>
                            <p className="font-weight-light text-capitalize">
                              {products.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td data-th="Price" className="fs-5">
                        <span>&#36;</span> {products.price}
                      </td>
                      <td data-th="Quantity" className=" d-flex g-1">
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          onClick={() => {
                            dispatch(incrementQuantity(products.id));
                          }}
                        >
                          <i className="bi bi-plus-circle"></i>
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={products.quantity}
                          style={{ width: "50px" }}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => {
                            dispatch(decrementQuantity(products.id));
                          }}
                        >
                          <i className="bi bi-dash-circle"></i>
                        </button>
                      </td>
                      <td className="actions" data-th="">
                        <div className="text-right">
                          <button
                            className="btn btn-white border-secondary bg-white btn-md mb-2"
                            onClick={() => handleRemove(products.id)}
                          >
                            <i
                              className="bi bi-trash text-danger"
                              style={{ fontSize: "20px" }}
                            ></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className=" d-flex float-end justify-content-between flex-column">
                <h4>Subtotal:</h4>
                <h2>
                  {" "}
                  <span>&#36;</span>
                  {calculateSubtotal()}
                </h2>
              </div>
            </div>
          </div>
          <div className="col mt-4 d-flex align-items-center">
            <div className="col-sm-6 order-md-2 text-end p-4">
              <a
                href="catalog.html"
                className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
              >
                Checkout <i className="bi bi-box-arrow-right"> </i>
              </a>
            </div>
            <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
              <NavLink to="/">
                <i className="fas fa-arrow-left mr-2"></i> Continue Shopping
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
