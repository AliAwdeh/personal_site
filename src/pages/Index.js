import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
    "Ali Awdeh's personal website. Lebanese inventor and developer with a passion for technology and innovation."
      + 'Explore my projects, experiences, and the journey that led me to where I am today.'

    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Inventor, Developer and Tech Enthusiast</Link>
          </h2>
          <p>
            Exploring the Intersection of Technology, Creativity, and Innovation.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Hi there! You can read more about my{' '}
        <Link to="/about">background</Link>, check out my{' '}
        <Link to="/resume">resume</Link>, explore my  <Link to="/projects">projects</Link>,{' '}
        view my <Link to="/stats">stats</Link>, or if you want you can {' '}
        <Link to="/contact">Reach Out</Link> to me.
      </p>

      <p>
        {' '}
        This website is built on a GitHub
        {' '}project that I discovered and customized to create a personal space online.
        {' '}While I didn’t design the frontend from scratch, I saw potential in the project
        {' '}and adapted it to suit my needs as a developer and inventor.
        {' '}My goal was to have a platform where I could share my work,
        {' '}experiences, and connect with others in a meaningful way.
        {' '}This site reflects my journey and serves as a way for me to continually
        {' '}grow and showcase what I’m passionate about.
        {' '}
        {' '}The link to the original project is {' '}
        <a href="https://github.com/mldangelo/personal-site" rel="noreferrer" target="_blank">Here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
