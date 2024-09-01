import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ali I. Awdeh</h2>
        <p>
          <a href="mailto:Ali.I.Awdeh@gmail.com">Ali.I.Awdeh@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Ali. I&apos;m a Lebanese inventor and tech enthusiast with a deep
        passion for innovation. My journey has led me through exciting projects
        in software development and blockchain. Along the way, I&apos;ve spoken at major
        events and contributed to the tech community. I&apos;m always exploring new ideas
        and pushing the boundaries of what&apos;s possible.
      </p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy;2024 Ali I. Awdeh <Link to="/">AliAwdeh.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
