import React from 'react'
import Header from '../components/Header.jsx'
import Statics from '../components/Statics.jsx'
import OurProducts from '../components/OurProducts.jsx'
import Order from '../components/Order.jsx'
import Reviews from '../components/Reviews.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'

const Main = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Statics />
            <OurProducts />
            <Order />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Main