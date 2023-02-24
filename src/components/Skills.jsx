import React from 'react';
import "./Skills.css";
import css3 from "../assets/css3.png"
import html5 from "../assets/html5.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import react from "../assets/react.jpg"
import WP from "../assets/WP.png"

const Skills = () => {
  return (
    <>
      <section className='skills-hero'>
        <h1>Skills</h1>
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
        <h1>Info</h1>
        <p>I know HTML, CSS and some JS. I do find it easier to work with React. I have done some Wordpress in school as well. However I do focus mainly on React & I'm thinking 
          to look into React native.</p>
      </section>
    </>
  )
}

export default Skills
