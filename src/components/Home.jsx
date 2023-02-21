import React from 'react'
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
          <p>Greetings! My name is Ryan.</p><p>I'm an aspiring web developer. Feel free to read about me <a href="/about">here</a></p>
         
        </section>

      </section>
    </>
  )
}

export default Home
