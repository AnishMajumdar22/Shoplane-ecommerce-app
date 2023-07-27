import React from 'react'
import { useNavigate } from 'react-router-dom';

function CategoryProducts(props) {
    // const navigate=useNavigate()
    const{id, image, price, title}=props.data



    return (
      <div className="col-md-3 text-center">
        <div className="card">
          <img src= {image} className="card-img-top object-fit-contain"/>
          <div className="card-body">
            <h5 className="card-title object-fit-contain">{title}</h5>
            <h2>
              <span>&#8377;</span> {price}
            </h2>
            <a href='#' className="btn btn-primary btn-block">
              View Item
            </a>
          </div>
        </div>
      </div>
    )
  }

export default CategoryProducts;