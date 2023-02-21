import React, { Component } from 'react'
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
          <p>Greetings! My name is Ryan.</p><p>I'm an aspiring web developer. Feel free to read about me <Link to="/about">here</Link></p>
        </section>

      </section>
      {/* <section className='home-info'>

        <ul><li>Location: Ytterby, Kungälv Sweden.</li></ul>
        <ul><li>Age: 31</li></ul>
        <ul><li></li></ul>
      </section> */}
    </>
  )
}

export default Home
