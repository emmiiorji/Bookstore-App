import { NavLink } from 'react-router-dom';

const Navs = () => {
  const navs = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="nav">
      {navs.map((nav) => <NavLink className={(navlink) => (navlink.isActive ? 'active-link' : '')} key={nav.id} to={nav.path}>{nav.text}</NavLink>)}
    </nav>
  );
};

export default Navs;
