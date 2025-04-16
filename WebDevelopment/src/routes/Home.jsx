import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomeHero from '../components/home/HomeHero'
import Product from '../components/home/Product'
import Partnerships from '../components/home/Partnerships'
import HomeRoutes from '../components/home/HomeRoutes'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main id="main-content" tabIndex="0">
        <Home Hero />
        <Product />
        <Partnerships />
        <HomeRoutes />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home