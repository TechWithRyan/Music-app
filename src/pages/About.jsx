import React from 'react'
import "./About.css"
import ryan from "../assets/ryan.jpg";
import "./Skills.css";
import css3 from "../assets/css3.png"
import html5 from "../assets/html5.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import react from "../assets/react.jpg"
import WP from "../assets/WP.png"

const About = () => {
  return (
    <>
      <div className='about-img'>

        <img src={ryan} alt="" />

      </div>
      <container className='image-box'>
      </container>
      <section className='info-text'><p><h1 className='title is-4'>Vägen hit</h1>
        Jag började min resa inom webbutveckling på gymnasiet 2007-2010. Efter gymnasiet har jag haft jobb i olika branscher. Event försäljning, Ställningsbyggare, Logistik, Vårdgivare & inom kundtjänst.  År 2020-2022 så har jag läst webbutveckling på Medieinstitutet i Göteborg. Nu söker jag nya möjligheter och ser optimistiskt på kommande projekt.</p>
        <br /><hr />


      </section>
      <div className="about-box">
        <section className='info-text'><p><h1 className='title is-4'>Styrkor</h1>Flytande i Svenska & Engelska. God social kompetens & gillar att socialisera. Jag är seriös med mitt fokus men har såklart även ett gott humör.</p>
          <br /><hr />

          <br />
          <section>
            <h1 className='title is-4'>Stack</h1>
          </section>
          <section className='icons-container'>
            <img src={css3} alt="" />
            <img src={html5} alt="" />
            <img src={JS} alt="" />
            <img src={node} alt="" />
            <img src={react} alt="" />
            <img src={WP} alt="" />
          </section>

          <section className='skills-info'>
            <h1 className='title is-4'>Info</h1>
            <p>Jag har koll på HTML, CSS och en del Javascript. Jag föredrar att använda React.JS. Jag har även gjort enklare projekt i Wordpress.</p>
          </section>
        </section>
      </div>
    </>
  )
}

export default About
