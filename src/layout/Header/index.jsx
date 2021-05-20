import React from 'react';

import './index.css';

const Header = () => (

  <header className="HeaderWrapper">
    <div className="Logo">
      BLOG
    </div>
    <div className="LinkWrapper">
      <a href="login" className="Link">
        Sign In
      </a>
      <a href="login" className="Link">
        Sign Up
      </a>
    </div>
  </header>

);

export default Header;
