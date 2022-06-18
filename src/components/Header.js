import React from 'react';
import { CgProfile } from 'react-icons/cg';
import Navs from './Navs';

const Header = () => (
  <header className="header">
    <div id="header-left">
      <h1>Book Store CMS</h1>
      <Navs />
    </div>
    <CgProfile />
  </header>
);

export default Header;
