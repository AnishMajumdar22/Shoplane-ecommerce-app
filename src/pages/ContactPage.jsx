import React from "react";
import funcasualman from "../pages/funcasualman.jpg";

function ContactPage() {
  return (
    <>
      <div className="container-fluid px-5 my-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0 rounded-4 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-sm-6 d-none d-sm-block bg-image">
                    <img src={funcasualman} alt="shopping" />
                  </div>
                  <div className="col-sm-6 p-4">
                    <div className="text-center">
                      <div className="h3 fw-bold">Contact Us</div>
                      <p className="mb-4 text-muted">
                        Let's talk about everything!
                      </p>
                    </div>

                    <form>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Name"
                        />
                        <label for="name">Name</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="emailAddress"
                          type="email"
                          placeholder="Email Address"
                        />
                        <label for="emailAddress">Email Address</label>
                      </div>

                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control"
                          id="message"
                          type="text"
                          placeholder="Message"
                          style={{ height: "10rem" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>

                      <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                          <div className="fw-bolder">
                            Form submission successful!
                          </div>
                        </div>
                      </div>

                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          id="submitButton"
                          type="submit"
                        >
                          Send Message! <i className="bi bi-send"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
