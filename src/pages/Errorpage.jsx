import React from 'react'
import { NavLink } from 'react-router-dom'

function Errorpage() {
  return (
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-12">
            <div className="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found <i className="bi bi-emoji-frown"></i> </h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <NavLink to="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </NavLink><NavLink to="/contactus" className="btn btn btn-outline-warning btn-lg"><span className="glyphicon glyphicon-envelope"></span> Contact Support <i className="bi bi-envelope-exclamation"></i> </NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Errorpage