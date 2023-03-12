import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg";
import "./Home.css"
import "./Services.css"
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";
import Banner from "../assets/Banner.jpg";
const Home = () => {
  return (
    <>
      <section className='hero-is-dark is-medium'>
        <div className="hero-body" >
          <img src="/src/assets/banner.png" alt="" />
         
        </div>
      </section>

      <div className="item-centering">
        <div className='title is-4'>
          <h1 className="title-header">Ny hemsida? Välj det som passar er bäst</h1>
        </div>
        <div className="columns">
          <div className="column">
            <a href="/Small">
              <div className='small'>
                <h1 className="title is-4">Small</h1>
                <img src={pack1} alt="" className='image' />

                <h2>React eller Wordpress</h2>
                <li>5 sidor</li>
                <li>Anpassad för mobil</li>
                <li>SEO</li>
                <li>Support och uppdatering 1 månad</li>
                <li>Nystartat Företag</li>
                <li>Leveranstid: 2 veckor</li>
                <div className='title is-5'>Pris: 3000 kr</div>
              </div></a>
          </div>

          <div className="column">
            <a href="/Medium">
              <div className='medium'>
                <h1 className='title is-4'>Medium</h1>
                <img src={pack2} alt="" className='image' />
                <h2>React eller Wordpress</h2>
                <li>10 sidor</li>
                <li>Anpassad för mobil</li>
                <li>SEO</li>
                <li>Support och uppdatering 1 månad</li>
                <li>Företag</li>
                <li>Leveranstid: 2 veckor</li>
                <div className='title is-5'>Pris: 5000 kr</div>
              </div></a>
          </div>

          <div className="column">
            <a href="/Large"><div className='large'>
              <h1 className='title is-4'>Large</h1>
              <img src={pack3} alt="" className='image' />
              <h2>React eller Wordpress</h2>
              <li>15 sidor</li>
              <li>Anpassad för mobil</li>
              <li>SEO</li>
              <li>Support och uppdatering 1 månad</li>
              <li>Större Företag</li>
              <li>Leveranstid: 3 veckor</li>
              <div className='title is-5'>Pris: 7000 kr</div>
            </div></a>
          </div>
        </div>
      </div>







      <div className="column">
        <div className='box'>
          <p className='center-text'>Låt mig hjälpa till med er hemsida.
            Jag kan erbjuda enklare lösningar till ett bra marknadspris. Välj en
            lösning som passar er under <a href="/services"> tjänster.</a>
          </p>
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
