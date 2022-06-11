import { Link } from 'react-router-dom';

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
      {navs.map((nav) => <Link key={nav.id} to={nav.path}>{nav.text}</Link>)}
    </nav>
  );
};

export default Navs;
