import React, { Component } from 'react'
/* import Typical from 'react-typical' */
import { Link } from 'react-router-dom'
import ryan from "../assets/ryan.jpg"
import "./Home.css"
const Home = () => {
  return (
    <>
      <section className='hero'>
        <h1>Welcome</h1>
      </section>

      <section className='home-container'>
        <section className='left'>
          <img src={ryan} alt="" />
        </section>

        <section className='right'>
    {/* <Typical
        steps={['<Hello world />', 5000, 'I`m an aspiring web developer 😊', 10000]}
        loop={3}
        wrapper="h1" className="typical-h1"
      />
    <Typical
        steps={['<My name is Ryan />', 5000, 'Feel free to read about me...', 10000]}
        loop={3}
        wrapper="p" className="typical"
      /> */}
        

          <p>Greetings! My name is Ryan.</p><p>I'm an aspiring web developer. Feel free to read about me <Link to="/about">here</Link></p>
         
        </section>

      </section>
      <section className='home-info'>

        <ul><li>Location: Ytterby, Kungälv Sweden.</li></ul>
        <ul><li>Age: 31</li></ul>
        <ul><li></li></ul>
        </section> 
    </>
  )
}

export default Home
