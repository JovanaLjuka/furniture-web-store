import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
];

const NavLinks = () => {
  const user = useSelector(state => state.user.user);
  return (
    <>
      {links.map(link => {
        const { id, url, text } = link;
        if ((url === 'checkout' || url === 'orders') && !user) return null;
        return (
          <li key={id}>
            <NavLink to={url} className="capitalize">
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
