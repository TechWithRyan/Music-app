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
import ReactPlayer from 'react-player'

const About = () => {
  return (
    <>
      <div className='container'>
        <div className="box">

          <div className='box, about-img'>
            <img src={ryan} alt="Photo of myself" />
          </div>
          <div className='info-text'>
            <h1 className='title is-4'>
              Vägen hit
            </h1>
            <p>
              Jag började min resa inom webbutveckling på gymnasiet 2007-2010. Efter gymnasiet har jag haft jobb i olika branscher. Event försäljning, Ställningsbyggare, Logistik, Vårdgivare & inom kundtjänst.  År 2020-2022 så har jag läst webbutveckling på Medieinstitutet i Göteborg. Nu söker jag nya möjligheter och ser optimistiskt på kommande projekt.
            </p>

          </div>
      
        <div className="about-box">
          <section className='info-text'>
            <h1 className='title is-4'>
              Styrkor
            </h1>
            <p>
              Flytande i Svenska & Engelska. God social kompetens & gillar att socialisera. Jag är seriös med mitt fokus men har såklart även ett gott humör.
            </p>
            <br />

            <h1 className='title is-4'>Stack</h1>

            <div className='box-icons'>
              <img src={css3} alt="" className='css' />
              <img src={html5} alt="" className='html5' />
              <img src={JS} alt="" className='js' />
              <img src={node} alt="" className='node' />
              <img src={react} alt="" className='react' />
              <img src={WP} alt="" className='wp' />
            </div>

            <section className='skills-info'>
              <h1 className='title is-4'>Info</h1>
              <p>Jag har koll på HTML, CSS och en del Javascript. Jag föredrar att använda React.JS. Jag har även gjort enklare projekt i Wordpress.</p>
            </section>
          </section>

          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=zyTdmISgZgg'
              width='100%'
              height='100%'
              controls={true}

            />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
