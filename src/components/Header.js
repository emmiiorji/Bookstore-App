import React from 'react';
import { CgProfile } from 'react-icons/cg';
import Navs from './Navs';

const Header = () => (
  <header>
    <h1>Book Store CMS</h1>
    <Navs />
    <CgProfile />
  </header>
);

export default Header;
