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
                        Enklare hemsida
                    </p>
                    <p>Beställ <Link to="/email">här</Link></p>
                </div>
            </section>


            <div className="item-centering">
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
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            



        </>
    )
}


export default Small
