import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="links-container">
                    <div className="logo">
                        <img src={require('../images/logo-vertik.png')} alt="" />
                    </div>

                    <div className="links">
                        <h3>Ссылки</h3>

                        <ul>
                            <li>
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">О нас</a>
                            </li>
                            <li>
                                <a href="#">Товары</a>
                            </li>
                        </ul>
                    </div>

                    <div className="links">
                        <h3>Контакты</h3>

                        <ul>
                            <li>
                                <a href="mail to:info@etu.ru">info@etu.ru</a>
                                <a href='https://etu.ru/ru/sotrudnikam/kancelyariya' target='_blank'>
                                    Для официальных запросов
                                </a>
                            </li>
                            <li>
                                <a href="mailto:oso@etu.ru">oso@etu.ru</a>
                                <a href='https://etu.ru/ru/vospitatelnaya-i-socialnaya/upravlenie-korporativnyh-i-vneshnih-kommunikacij/oso/' target='_blank'>
                                    Отдел по связям с общественностью
                                </a>
                            </li>
                            <li>
                                <a href="mailto:prcom@etu.ru">prcom@etu.ru</a>
                                <a href='https://abit.etu.ru/ru/postupayushhim/priyomnaya-komissiya' target='_blank'>
                                    Приемная комиссия
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ds@etu.ru">ds@etu.ru</a>
                                <a href='https://etu.ru/ru/upravlenie-informacionnyh-tehnologiy/direkciya-sayta/' target='_blank'>
                                    Дирекция сайта
                                </a>
                            </li>
                        </ul>


                    </div>
                </div>

                <div className="social">
                    <a href="https://t.me/LETIToday" target='_blank'>
                        <img src={require('../images/telegram-logo.png')} alt='' />
                    </a>

                    <a href="https://ok.ru/spbetu" target='_blank'>
                        <img src={require('../images/odnoklassniki-logo.png')} alt='' />
                    </a>

                    <a href="https://www.tiktok.com/@etu_leti" target='_blank'>
                        <img src={require('../images/tiktok-logo.png')} alt='' />
                    </a>

                    <a href="https://rutube.ru/channel/23710871/" target='_blank'>
                        <img src={require('../images/rutube-logo.png')} alt='' />
                    </a>

                    <a href="https://vk.com/spbsetu" target='_blank'>
                        <img src={require('../images/vk-logo.png')} alt='' />
                    </a>

                    <a href="https://letitoday.ru/" target='_blank'>
                        <img src={require('../images/letitoday-logo.png')} alt='' />
                    </a>
                </div>

                <p className="copyright">© 1995 - 2023 Санкт-Петербургский государственный
                    электротехнический университет «ЛЭТИ» им. В.И.Ульянова (Ленина) СПбГЭТУ «ЛЭТИ»</p>
            </div>
        </footer>
    )
}

export default Footer