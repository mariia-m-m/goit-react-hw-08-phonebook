import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import items from '../pages/items';
import NavAuth from './NavAuth/NavAuth';
import NavbarUser from '../Navbar/NavbarUser/NavbarUser';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selector';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const elements = items.map(({ id, title, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {title}
      </NavLink>
    </li>
  ));
  return (
    <div className={styles.menu}>
      <ul className={styles.menuPages}>{elements}</ul>
      <div className={styles.auth}>
        {!isLogin && <NavAuth />}
        {isLogin && <NavbarUser />}
        {/* <NavLink to="/registration" className={styles.link}>
          Registr
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;
