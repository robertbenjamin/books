import React from 'react';
import './AboutMe.css';

function AboutMe() {
  const imageSrc = require('../images/about.jpg');

  return (
    <section className="about-me">
      <h1 className="header">What's this about?</h1>
      <img src={imageSrc} className="image" alt="" />
      <p className="details">This is a place for me to keep note of books I've read.</p>
      <p>It was built using <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> with book covers from <a href="https://www.amazon.com/books-used-books-textbooks/b/ref=topnav_storetab_b" target="_blank" rel="noopener noreferrer">Amazon</a>.</p>
    </section>
  )
}

export default AboutMe;
