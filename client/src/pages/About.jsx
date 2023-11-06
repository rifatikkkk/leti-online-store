import React, { Fragment } from 'react'
import Header from '../components/Header'
import MetaData from '../components/MetaData'

const About = () => {
    return (
        <Fragment>
            <MetaData title='О нас' />
            <Header />
            <div className="wrapper">
                <div className="about-section">
                    <div className="about-container">
                        <img src={require('../images/polo-white.png')} alt="" className='about-pic' />
                        <div className="about-text">
                            <h2>О нас</h2>
                            <h5>Первый электротехнический: образование для технологий будущего</h5>
                            <p>Университет «ЛЭТИ» — старейший в Европе электротехнический вуз,
                                отсчитывающий свою историю с 1886 года, — в настоящее время по праву считается одним из ведущих технических университетов нашей страны.
                                Выпускники-лэтишники высоко ценятся профессиональным сообществом и добиваются значимых успехов не только в научной, инженерной,
                                педагогической работе, но и в общественной деятельности, достигают многого на политической арене, демонстрируют яркие результаты в бизнесе</p>
                            <div className="about-link">
                                <a href="https://etu.ru/" target='_blank' className='btn light'>Узнать больше</a>
                            </div>
                        </div>
                        <div className="bg-figure-about">
                            <img src={require('../images/figure-back-about.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About