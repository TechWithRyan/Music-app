import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg";
import "./Home.css"
const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-body'>
          <h1 className='title is-4'>
            Välkommen!
          </h1>
          <p>Jag heter Ryan. Läs gärna mer om mig <Link to="/about">här</Link></p>
          
        </div>
      </section>

      <section className='box'>
        <div className="image-text">

        <section className='left'>
          <img src={img1} alt="" />
        </section>
        <section className='right'>
          <p>Låt mig hjälpa till med er hemsida.
            Jag kan erbjuda enklare lösningar till ett bra marknadspris.
          </p>
        </section>
        </div>

        
      <section>
        <div className='info'>
        <h1 className='title is-4'>Modern teknik</h1>
        
        <p>Jag använder mig huvudsakligen av React.JS för att göra hemsidor. Vilket är bland de mest populära ramverken.
          Vill ni hellre ha en sida i wordpress går det att ordna det med.</p></div>
      </section>
      </section>

    </>
  )
}

export default Home
