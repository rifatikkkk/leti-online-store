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
                        <h3>Свитшот </h3>
                        <h6>Cвитшоты, созданные с особой тщательностью, станут украшением вашего повседневного гардероба. </h6>
                    </div>

                    <a href="/products" className='btn light'>Подробнее</a>
                </div>
                <div className="prod-card">
                    <img src={require('../images/hoody-black.png')} alt="" />

                    <div className="prod-info">
                        <h3>Толстовка</h3>
                        <h6>Эти толстовки обеспечивают идеальное сочетание комфорта и моды. </h6>
                    </div>

                    <a href="/products" className='btn light'>Подробнее</a>
                </div>
                <div className="prod-card">
                    <img src={require('../images/polo-white.png')} alt="" />

                    <div className="prod-info">
                        <h3>Поло</h3>
                        <h6>Представляем нашу коллекцию поло, в которых комфорт легко сочетается со стилем. </h6>
                    </div>

                    <a href="/products" className='btn light'>Подробнее</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProducts