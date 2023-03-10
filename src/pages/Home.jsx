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
      <div className="columns">
        <div className="column">

          <div className='box'>
            <img src={img1} alt="" className='laptop-photo' />
          </div>
        </div>
        <div className="column">
           <div className='box'>
        <p>Låt mig hjälpa till med er hemsida.
          Jag kan erbjuda enklare lösningar till ett bra marknadspris. Välj en 
          lösning som passar er under tjänster.
        </p>
      </div>
        </div>
      </div>

     



      <section>
        <div className='info'>
          <h1 className='title is-4'>Modern teknik</h1>

          <p>Jag använder mig huvudsakligen av React.JS för att göra hemsidor. Vilket är bland de mest populära ramverken.
            Vill ni hellre ha en sida i wordpress går det att ordna det med.</p></div>
      </section>


    </>
  )
}

export default Home
