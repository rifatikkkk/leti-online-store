import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../redux/slice/cartSlice';

const ProductItem = ({ product, condition }) => {
  const dispatch = useDispatch();
  const [idProductSelect, setIdProductSelect] = useState(product._id);

  const addToCartHandle = () => {
    if (condition === 'В корзину') {
      console.log(idProductSelect)
      console.log('Add item to cart')
      dispatch(addItemsToCart(idProductSelect))
    }
    else {
      console.log('Не получилось добавить, авторизуйтесь');
      window.alert("Ошибка добавления товара в корзину. Авторизуйтесь!")
    }
  }



  return (
    <a className="product-item" href={"/product/" + product._id}>
      <img src={`http://localhost:3001/${product.images[0].url}`} alt="" />
      <div className="product-desc">
        <span>{product.category}</span>
        <h5>{product.name}</h5>
        <h4>{product.price} рублей</h4>
      </div>
      <a href="#" className='btn light' onClick={() => {
        addToCartHandle()
      }}>{condition}</a>
    </a>

  )
}

export default ProductItem