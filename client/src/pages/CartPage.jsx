import React, { Fragment, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios.js'
import { clearItemsCart, editItemsCart } from '../redux/slice/cartSlice.js'

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading, isAthenticated } = useSelector((state) => state?.user)
    const { cartItems, shippingInfo } = useSelector((state) => state?.cartItems)
    const [testValue, setTestValue] = useState(false)


    var totalPrice = 0;

    const editCartItems = [...cartItems]


    const decreaseQuantity = (id, quantityGet) => {
        let newQty = quantityGet
        if (newQty <= 1) {
            return
        }
        else {
            newQty -= 1
            const newState = editCartItems.map(obj =>
                obj.product === id ? { ...obj, quantity: newQty } : obj
            );
            dispatch(editItemsCart(newState))
            countPrice()
        }
    }

    const increaseQuantity = async (id, quantityGet) => {
        const getProductFromServer = await (await axios.get(`http://localhost:3001/api/product/${id}`)).data.product

        let newQty = quantityGet
        if (newQty >= getProductFromServer.stock) {
            return
        }
        else {
            newQty += 1
            const newState = editCartItems.map(obj =>
                obj.product === id ? { ...obj, quantity: newQty } : obj
            );
            dispatch(editItemsCart(newState))
            countPrice()
        }
    }

    const removeItem = (itemProduct) => {
        editCartItems.filter((a, i) => {
            if (itemProduct == a.product) {
                editCartItems.splice(i, 1)
                window.localStorage.setItem('cartItems', JSON.stringify(editCartItems))
                setTestValue(!testValue)
            }
        })
        dispatch(editItemsCart(editCartItems))
    }

    const countPrice = () => {
        totalPrice = 0
        const data = JSON.parse(window.localStorage.getItem('cartItems'));
        console.log(data);
        data.forEach(element => {
            totalPrice += element.price * element.quantity
        });
        console.log(totalPrice)
        document.querySelector('div.total-price').innerHTML = `Итого: <b>${totalPrice}</b> рублей`
        return totalPrice
    }

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
        countPrice()
    }, [navigate, totalPrice])

    const sendOrder = async () => {
        console.log('click')
        console.log(totalPrice)
        const sumPrice = countPrice();
        console.log(sumPrice)
        if (sumPrice == 0 || isNaN(sumPrice)) {
            console.log('Необходимл пересчитать итоговую стоимость')
        }
        else {
            await axios.post('order/new', {
                itemsPrice: sumPrice,
                taxPrice: 0,
                shippingPrice: 0,
                orderItems: editCartItems,
                user: user._id,
                shippingInfo: {
                    address: 'Адрес по умолчанию',
                    pinCode: '000000',
                    phone: '89123456789',
                },
                paymentInfo: {
                    id: "sample paymentInfo",
                    status: "succeeded"
                }
            })

            window.localStorage.removeItem('cartItems');
            dispatch(clearItemsCart())
            totalPrice = 0;
        }
    }


    return (
        <Fragment>
            <Header />
            <div className="wrapper">
                <div className="cart-container">
                    <div className="cart-section">
                        <div className="cart-title">
                            Корзина
                        </div>
                        {cartItems && cartItems.map(item => {
                            return (<div className='cart-item'>
                                <div className="cart-buttons" onClick={() => removeItem(item.product)}>
                                    <span className='delete-button'></span>
                                </div>

                                <div className="cart-image">
                                    <img src={`http://localhost:3001/${item.image}`} alt="" />
                                </div>

                                <div className="cart-description">
                                    <span>{item.name}</span>
                                </div>

                                <div className="cart-quantity">
                                    <button className='minus-button' type='button' name='button' onClick={() => {
                                        decreaseQuantity(item.product, item.quantity)
                                    }}>
                                        <img src={require('../images/minus-icon.png')} alt="" />
                                    </button>

                                    <input type="text" name="name" value={item.quantity} />

                                    <button className='plus-button' type='button' name='button' onClick={() => {
                                        increaseQuantity(item.product, item.quantity)
                                    }}>
                                        <img src={require('../images/add-icon.png')} alt="" />
                                    </button>
                                </div>

                                <div className="cart-price">{item.price * item.quantity} рублей
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>

                <div className='total-price'>0 рублей</div>

                <div className="order-btn" onClick={() => sendOrder()}>
                    <div className="btn light">Оформить заказ</div>
                </div>
            </div>
        </Fragment>
    )
}

export default CartPage