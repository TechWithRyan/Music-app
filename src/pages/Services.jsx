import React from 'react'
import "./Services.css"
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";
const Services = () => {
  return (
    <>
      <div className="item-centering">
        <div className='title is-4'>
          <h1 className="title-header">Välj det som passar er bäst</h1>
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
              </div>
            </a>
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
            </div>
            </a>
          </div>

          <div className="column">
            <a href="/Large">
            <div className='large'>
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
            </div>
            </a>
          </div>
        </div>
      </div>


    </>

  )
}

export default Services
