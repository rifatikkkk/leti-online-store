import React, { Fragment, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser, } from '../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'

const Authorization = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token, loading, isAuthenticated } = useSelector((state) => state.user);

    const [isActive, setIsActive] = useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const loginSumbit = (e) => {
        try {
            console.log('login sumbit');
            e.preventDefault();
            dispatch(loginUser({ name, password }));
            setName('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    }

    const registerSubmit = (e) => {
        try {
            console.log('register submit')
            e.preventDefault();
            dispatch(registerUser({ name, password }));
            setName('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log('open window');
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate])

    const handleAuth = () => {
        setIsActive(!isActive);
        console.log(isActive)
    }





    return (
        <Fragment>
            <Header />
            <div className="wrapper">
                <div className="auth-section">

                    <div className={isActive ? 'auth' : 'auth active'}>


                        <div className="form-box login">
                            <h2>Авторизация</h2>
                            <form>
                                <div className="input-box">
                                    <input type='text' required value={name} onChange={(e) => setName(e.target.value)} />
                                    <label>Логин</label>
                                </div>
                                <div className="input-box">
                                    <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label>Пароль</label>
                                </div>
                                <button id='btn-login' className='btn-login' onClick={loginSumbit} >Войти</button>
                                <div className='login-register'>
                                    <p>Нет аккаунта?
                                        <a className='register-link' onClick={handleAuth}> Зарегистрироваться</a>
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="form-box register">
                            <h2>Регистрация</h2>
                            <form>
                                <div className="input-box">
                                    <input type='text' required value={name} onChange={(e) => setName(e.target.value)} />
                                    <label>Логин</label>
                                </div>
                                <div className="input-box">
                                    <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label>Пароль</label>
                                </div>
                                <button className='btn-login' onClick={registerSubmit}  >Зарегистрироваться</button>
                                <div className='login-register'>
                                    <p>{'Имеется аккаунт?\n'}
                                        <a className='register-link' onClick={handleAuth}>Авторизоваться</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Authorization