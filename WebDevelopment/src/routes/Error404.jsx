import React, { Fragment } from 'react'
import Lottie from "lottie-react"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import errorAnimation from "../assets/error-animation.json"
import Footer from '../components/Footer'
import '../styles/Error404.css'


const Error404 = () => {
    return (
        <Fragment>
            <Navbar/>
            <main className='error'>
                <div className='error_wrapper'>
                    <Lottie className='error_animation' animationData={errorAnimation} loop={true} />
                    <h1 className='error_header'>Error 404</h1>
                    <p className='error_message'>Page Not Found...</p>
                    <p className='error_text'><Link className='error_link' path='/'>Home</Link></p>
                </div>
            </main>
            <Footer/>
        </Fragment>
    )
}

export default Error404