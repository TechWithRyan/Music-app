import React, { Component } from 'react'
import "./Home.css"
import pack1 from "../assets/pack1.jpg";
/* import section-image from "../assets/section-image.jpg"; */
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";
import Banner from "../assets/Banner.jpg";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className="hero-body .container .is-max-widescreen" >
          <img src={Banner} />
        </div>
      </section>
      <div className="box">
        <div className="item-centering">
          <div className='title is-4'>

          </div>
          <div className="item-centering">
            <h1 className="title-is-4">Ny hemsida? Välj det som passar er bäst</h1>
            <p>Låt mig hjälpa er med hemsidan.
              Jag kan erbjuda enklare lösningar till ett bra marknadspris. Välj en
              plan som passar er här nedanför. 
            </p>
            <br />
            <button className='button is-primary'>Kontakta mig vid frågor eller funderingar</button>
            {/*      <img src={section-image} alt="" /> */}

          </div>
          <div className="columns">
            <div className="column">
              <div className='small'>
                <Link to="/small"> <h1 className="title is-4">Small</h1>
                  <img src={pack1} alt="" className='image' />

                  <h2>React eller Wordpress</h2>
                  <li>5 sidor</li>
                  <li>Anpassad för mobil</li>
                  <li>SEO</li>
                  <li>Support och uppdatering 1 månad</li>
                  <li>Nystartat Företag</li>
                  <li>Leveranstid: 2 veckor</li>
                  <div className='title is-5'>Pris: 3000 kr</div>
                </Link>
              </div>
            </div>

            <div className="column">

              <div className='medium'>
                <Link to="/medium"> <h1 className="title is-4">Medium</h1>
                  <img src={pack2} alt="" className='image' />
                  <h2>React eller Wordpress</h2>
                  <li>10 sidor</li>
                  <li>Anpassad för mobil</li>
                  <li>SEO</li>
                  <li>Support och uppdatering 1 månad</li>
                  <li>Företag</li>
                  <li>Leveranstid: 2 veckor</li>
                  <div className='title is-5'>Pris: 5000 kr</div>
                </Link>
              </div>
            </div>

            <div className="column">
              <div className='large'>
                <Link to="/large"> <h1 className="title is-4">Large</h1>
                  <img src={pack3} alt="" className='image' />
                  <h2>React eller Wordpress</h2>
                  <li>15 sidor</li>
                  <li>Anpassad för mobil</li>
                  <li>SEO</li>
                  <li>Support och uppdatering 1 månad</li>
                  <li>Större Företag</li>
                  <li>Leveranstid: 3 veckor</li>
                  <div className='title is-5'>Pris: 7000 kr</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
