import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import items from '../pages/items';

const Navbar = () => {
  const elements = items.map(({ id, title, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {title}
      </NavLink>
    </li>
  ));
  return (
    <>
      <ul className={styles.menu}>{elements}</ul>
      <div>
        <NavLink to="/registration" className={styles.link}>
          Registr
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
