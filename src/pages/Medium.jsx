import React, { Component } from 'react'
import "./Home.css"
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";
import { Link } from 'react-router-dom';

const Small = () => {
    return (
        <>
            <section class="hero">
                <div class="hero-body">
                    <p class="subtitle">
                        Medium hemsida
                    </p>
                    <Link to="/email" className="button is-primary" >Beställ här</Link>
                </div>
            </section>

            <div className="item-centering">
            <div className="columns">
                <div className="column">
                    <Link to="/Medium">
                        <div className='medium'>
                            <h1 className='title is-4'>Medium</h1>
                            <img src={pack2} alt="" className='image' />
                            <h2>React eller Wordpress</h2>
                            <li>10 sidor</li>
                            <li>Anpassad för mobil</li>
                            <li>Support och uppdatering 1 månad</li>
                            <li>Företag</li>
                            <li>Leveranstid: 2 veckor</li>
                            <div className='title is-5'>Pris: 5000 kr</div>
                        </div>
                    </Link>
                </div>
            </div>
            </div>




        </>
    )
}


export default Small
