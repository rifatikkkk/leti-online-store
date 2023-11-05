import React from 'react'

const OurProducts = () => {
  return (
    <div className='prod-section'>
        <div className="wrapper">
            <h2 className='light'>Наша продукция</h2>

            <div className="prod-cards">
                <div className="prod-card">
                    <img src={require('../images/sweat-red.png')} alt="" />

                    <div className="prod-info">
                        <h3>Свитшот</h3>
                        <h6>Большое описание Большое описание Большое описание </h6>
                    </div>

                    <a href="#" className='btn light'>В корзину</a>
                </div>
                <div className="prod-card">
                    <img src={require('../images/hoody-black.png')} alt="" />

                    <div className="prod-info">
                        <h3>Толстовка</h3>
                        <h6>Большое описание Большое описание Большое описание </h6>
                    </div>

                    <a href="#" className='btn light'>В корзину</a>
                </div>
                <div className="prod-card">
                    <img src={require('../images/polo-white.png')} alt="" />

                    <div className="prod-info">
                        <h3>Поло</h3>
                        <h6>Большое описание Большое описание Большое описание </h6>
                    </div>

                    <a href="#" className='btn light'>В корзину</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProducts