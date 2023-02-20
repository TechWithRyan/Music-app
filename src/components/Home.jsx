import React from 'react'
import ryan from "../assets/ryan.jpg"
import "./Home.css"
const Home = () => {
  return (
    <>
      <section className='hero'>
        <h1>Welcome to the home page</h1>
      </section>

      <section className='home-container'>
        <section className='left'>
          <img src={ryan} alt="" />
        </section>
        <section className='right'>
          <p>Hey! My name is Ryan.</p><br /><p>I spent 2020-2022 studying web development at Medieinstitutet in Gothenburg, Sweden. Our focus was in e-commerce.</p>
        </section>

      </section>
    </>
  )
}

export default Home
