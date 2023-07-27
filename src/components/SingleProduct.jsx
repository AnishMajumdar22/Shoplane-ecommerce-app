import React from 'react'

function SingleProduct(props) {
    const{id,category,description,image,price,title,rating}=props.data
  return (
    <div>
    <div className="col-md-6">
        <img src={image} alt={title} height="400px" width="400px" />
    </div>
    <div className="col-md-6">
        <h4 className=' text-uppercase text-black-50'>{category}</h4>
        <h1 className=' display-5'>{title}</h1>
        <p className=' lead fw-bolder'>
            Rating {rating && rating.rate}
            <i class="bi bi-star-fill"></i>
        </p>
        <h3 className="display-6 fw-bold my-4">{price}</h3>
        <p className="lead">{description}</p>
        <button type="button" class="btn btn-outline-info px-4 py-2">Add to Cart</button>
        <button type="button" class="btn btn-info mx-2 py-2 px-3">Go to Cart</button>

    </div>
    </div>
  )
}

export default SingleProduct