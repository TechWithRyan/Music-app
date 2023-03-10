import React from 'react'
import "./Services.css"
import pack1 from "../assets/pack1.jpg";
import pack2 from "../assets/pack2.jpg";
import pack3 from "../assets/pack3.jpg";
const Services = () => {
  return (
<>
      <h1 className='title is-1'>Välj det som passar er bäst</h1>
    <div class="packs">
      <div class="column"><div className='small'><h1 className="title is-4">Small</h1>
        <figure class="image is-135x135">
          <img src={pack1} alt="" />
        </figure>
        <ul>
          <h2>React eller Wordpress</h2>
          <li>3 sidor</li>
          <li>Anpassad för mobil</li>
          <li>SEO</li>
          <li>Support och uppdatering 1 månad</li>
          <li>Nystartat bolag</li>

        </ul>
      </div>
      </div>
      <div class="column"><div className='medium'><h1 className='title is-4'>Medium</h1>
      <figure class="image is-135x135">
          <img src={pack2} alt="" />
        </figure>
      </div></div>
      <div class="column"><div className='large'><h1 className='title is-4'>Large</h1>
      <figure class="image is-135x135">
          <img src={pack3} alt="" />
        </figure>
      </div></div>

    </div>
          </>

  )
}

export default Services
