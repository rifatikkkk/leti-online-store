import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/slice/userSlice';


const Header = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logoutUser());
    }


    return (
        <header>
            <div className="wrapper">
                <nav>
                    <div className="logo">
                        <img src={require('../images/logo-krug.png')} alt="" />
                    </div>
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="/products">Товары</a>
                        </li>
                        {isAuthenticated ? (
                            <div className='auth-block'>
                                <li>
                                    <img onClick={logoutHandle} src={require('../images/logout-logo.png')} />
                                </li>
                                <li>
                                    <a href="/orders" className='btn dark'>Корзина</a>
                                </li>
                            </div>
                        ) : (
                            <li>
                                <a href="/authorization" className='btn dark'>Войти в систему</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header