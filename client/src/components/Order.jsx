import React from 'react'

const Order = () => {
    return (
        <div className="order-section">
            <div className="wrapper">
                <div className="order-part">
                    <div className="left">
                        <h1 className='head'>Оформление заказа - просто и быстро</h1>

                        <div className="action-cards">
                            <div className="action-card">
                                <h1>01</h1>
                                <h3>Регистрируйся на сайте</h3>
                            </div>
                            <div className="action-card">
                                <h1>02</h1>
                                <h3>Выбирай товар</h3>
                            </div>
                            <div className="action-card">
                                <h1>03</h1>
                                <h3>Заполняй форму</h3>
                            </div>
                            <div className="action-card">
                                <h1>04</h1>
                                <h3>Оформляй заказ</h3>
                            </div>
                            <div className="action-card">
                                <h1>05</h1>
                                <h3>Наслаждайся!</h3>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require('../images/logo-krug.png')} alt="" />
                    </div>


                    {/* <div className="bg-figure">
                    <img src={require('../images/figure-back.png')} alt="" />
                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Order