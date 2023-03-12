import { NavLink } from 'react-router-dom';
import styles from '../../Navbar/navbar.module.css';

const NavAuth = () => {
  return (
    <>
      {' '}
      <NavLink className={styles.link} to="/registration">
        Registration
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </>
  );
};

export default NavAuth;
