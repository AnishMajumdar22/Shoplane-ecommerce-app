import React from "react";

function Footer() {
  return (
    <div className="footer-section mt-4">
      <hr className="hr hr-blurry" />
      <div className="footer">
        <div className="container d-flex">
          <div className="col-md-4 footer-one">
            <h5 className=" text-center">Fine Us on</h5>
            <ul
              className="social-icons text-center"
              style={{ fontSize: "21px" }}
            >
              <li>
                <i id="social-fb" className="bi bi-facebook"></i>
              </li>
              <li>
                <i id="social-tw" className="bi bi-twitter"></i>
              </li>
              <li>
                <i id="social-in" className="bi bi-instagram"></i>
              </li>
              <li>
                <i id="social-em" className="bi bi-envelope-fill"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-two">
            <h5>Information </h5>
            <ul>
              <li>
                <a href="maintenance.html">Customer Service</a>
              </li>
              <li>
                <a href="contact.html">Locations</a>
              </li>
              <li>
                <a href="about.html">Testimonials</a>
              </li>
              <li>
                <a href="about.html">Careers</a>
              </li>
              <li>
                <a href="about.html">Partners</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 footer-three">
            <h5>Helpful Links </h5>
            <ul>
              <li>
                <a href="maintenance.html">FAQ</a>
              </li>
              <li>
                <a href="contact.html">Stores</a>
              </li>
              <li>
                <a href="about.html">Returns Policy</a>
              </li>
              <li>
                <a href="about.html">Join Us</a>
              </li>
              <li>
                <a href="about.html">Selling Partners</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 footer-four">
            <h5>Other Links</h5>
            <ul>
              <li>
                <a href="maintenance.html">Brands</a>
              </li>
              <li>
                <a href="contact.html">Store locator</a>
              </li>
              <li>
                <a href="about.html">Terms</a>
              </li>
              <li>
                <a href="about.html">Sell with us</a>
              </li>
              <li>
                <a href="about.html">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center ">
              <div className="copyright-text">
                <p>CopyRight © 2023 Digital All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
