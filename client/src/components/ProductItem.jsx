import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

const ProductItem = ({ product, condition }) => {
  const dispatch = useDispatch();
  const [idProductSelect, setIdProductSelect] = useState(product._id);
  return (
    <a className="product-item" href={"/product/"+ product._id}>
      <img src={`http://localhost:3001/${product.images[0].url}`} alt="" />
      <div className="product-desc">
        <span>{product.category}</span>
        <h5>{product.name}</h5>
        <h4>{product.price} рублей</h4>
      </div>
      <a href="#" className='btn light'>В корзину</a>
    </a>

  )
}

export default ProductItem