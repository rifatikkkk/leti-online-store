import React from 'react'

const Reviews = () => {
  return (
    <div className="review-section">
        <div className="wrapper">
            <h2 className="light">Что говорят наши покупатели</h2>

            <div className="review-cards">
                <div className="review-card">
                    <div className="review-text">
                        <h4>Мой опыт работы с этим интернет-магазином одежды был исключительно положительным. 
                            Я искренне рекомендую его всем, кто ищет первоклассную моду, отличное соотношение 
                            цены и качества и отличное обслуживание клиентов. Мне не терпится снова сделать 
                            там покупки и познакомиться с их великолепной коллекцией!</h4>
                    </div>

                    <div className="review-avatar">
                        <img src={require('../images/rifatikkkk-pic.jpg')} alt="" />
                    </div>

                    <h2>Ильбульдин Рифат</h2>
                </div>
                <div className="review-card">
                    <div className="review-text">
                        <h4>Процесс заказа прошел без проблем, с удобным веб-сайтом и простым процессом оформления заказа. 
                            Доставка моих товаров была быстрой, а упаковка была тщательно сделана, чтобы не повредить ее. 
                            Внимание к деталям вышло за рамки!</h4>
                    </div>

                    <div className="review-avatar">
                        <img src={require('../images/angelinaaaa-pic.jpg')} alt="" />
                    </div>

                    <h2>Ангелина Никитина</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews