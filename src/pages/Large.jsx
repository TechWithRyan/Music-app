import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.jpg";
import "./Home.css"
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";

const Small = () => {
    return (
        <>
           <section className="hero">
  <div className="hero-body">
    <p className="subtitle">
        Hemsida med fler sidor
    </p>
    <p>Beställ <Link to="/email">här</Link></p>
  </div>
</section>


            <div className="item-centering">
                <div className="columns">
                <div className="column">
            <Link to="/Large"><div className='large'>
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
            </div></Link>
          </div>
                </div>
            </div>
            
          

        </>
    )
}


export default Small
