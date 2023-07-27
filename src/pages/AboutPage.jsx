import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      
      <div className="container">
        <div className="jumbotron text-center mt-5">
          <div className="display-5 mb-5" style={{ paddingRight: "37px" }}>
            About Us
          </div>
        </div>
        <div
          className="container p-4"
          style={{ backgroundColor: "rgb(245,245,245)" }}
        >
          <section>
            <p className=" p-3">
              ShopLane is a team of 100+ experienced designers and developers.
              We have 270,000 customers from more than 120 countries using our
              product and services. We are selling exclusive collections and
              custom design dresses since 2010.
            </p>
            <p className=" p-3">
              We are energetic about discovering things that transcend the
              commonplace; that we think will get your attention and capture it.
              In addition, to convey these to you wherever you are and at
              whatever point you believe you have sufficient energy to enjoy a
              bit. So we made an organization to bring you items you will become
              hopelessly enamored with; to allow you to make your very own
              space, to take advantage of those concealed abilities and make
              your own looks and accumulations; to enable you to impart your
              manifestations to companions to understand that second conclusion,
              to move or be enlivened; and to enable you to shop such that you
              will discover hypnotizing.
            </p>
          </section>
        </div>
        <div className=" row p-3" style={{marginLeft:"85px"}} >
            
          <div className="col-md-3 col-sm-6" >
            <div className="card" style={{height:"100px", width:"140px"}}>
              <div className="card-body">
                <h5 className="text-center"><i className="bi bi-truck"></i></h5>
                <h6 className="card-title text-center">Fast Delivery</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card" style={{height:"100px", width:"140px"}}>
              <div className="card-body">
                <h5 className="text-center"><i className="bi bi-lock-fill"></i></h5>
                <h6 className="card-title text-center">Secure Payment</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card" style={{height:"100px", width:"140px"}}>
              <div className="card-body">
                <h5 className="text-center"><i class="bi bi-headset"></i></h5>
                <h6 className="card-title text-center">24x7 Support</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card" style={{height:"100px", width:"140px"}}>
              <div className="card-body">
                <h5 className="text-center"><i className="bi bi-box2-heart"></i></h5>
                <h6 className="card-title text-center">Easy Returns</h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      

      
    </>
  );
}

export default AboutPage;
