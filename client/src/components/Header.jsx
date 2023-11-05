import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="wrapper">
            <nav>
                <ul>
                    <li>
                        <a href="#">Главная</a>
                    </li>
                    <li>
                        <a href="#">О нас</a>
                    </li>
                </ul>
                <div className="logo">
                    <img src={require('../images/logo-krug.png')} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="#">Товары</a>
                    </li>
                    <li>
                        <a href="#" className='btn dark'>Войти в систему</a>
                    </li>
                </ul>
            </nav>

            {/* <div className="hero-section">
                <div className="left">
                    <h1>Онлайн-магазин СПБГЭТУ "ЛЭТИ"</h1>
                    <p>Освежи свой стиль с LETI</p>
                    <a href="#" class="btn light inproduct-icon">К ТОВАРАМ</a>
                </div>

                <div className="right">
                    <img src={require('../images/human-main.png')} alt="" />
                </div>

                <div className="bg-figure">
                    <img src={require('../images/figure-back.png')} alt="" />
                </div>
            </div> */}
        </div>
    </header>
  )
}

export default Header