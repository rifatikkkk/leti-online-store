import React from 'react'

const Hero = () => {
    return (
        <div className="wrapper">
            <div className="hero-section">
                <div className="left">
                    <h1>Онлайн-магазин СПБГЭТУ "ЛЭТИ"</h1>
                    <p>Освежи свой стиль с LETI</p>
                    <a href="/products" class="btn light inproduct-icon">К товарам</a>
                </div>

                <div className="right">
                    <img src={require('../images/human-main.png')} alt="" />
                </div>

                <div className="bg-figure">
                    <img src={require('../images/figure-back.png')} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero