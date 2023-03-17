import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavAuth from './NavAuth/NavAuth';
import NavbarUser from '../Navbar/NavbarUser/NavbarUser';
import items from '../pages/items';
import { isUserLogin } from 'redux/auth/auth-selector';
import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;
  const elements = filteredItems.map(({ id, title, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {title}
      </NavLink>
    </li>
  ));
  return (
    <div className={styles.menu}>
      <NavLink to="/">Logo</NavLink>
      <ul className={styles.menuPages}>{elements}</ul>
      <div className={styles.auth}>
        {!isLogin && <NavAuth />}
        {isLogin && <NavbarUser />}
      </div>
    </div>
  );
};

export default Navbar;
