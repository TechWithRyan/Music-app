import React from 'react';
import "./Skills.css";
import css3 from "../assets/css3.png"
import html5 from "../assets/html5.png"
import JS from "../assets/JS.png"
import node from "../assets/node.png"
import react from "../assets/react.jpg"

const Skills = () => {
  return (
    <>
      <section className='skills-hero'>
        <h1>Skills</h1>
      </section>
      <section className='icons-container'>
        <img src={css3} alt="" />
        <img src={html5} alt="" />
        <img src={JS} alt="" className='js-icon'/>
        <img src={node} alt="" />
        <img src={react} alt="" />
      </section>
      <section></section>
    </>
  )
}

export default Skills
