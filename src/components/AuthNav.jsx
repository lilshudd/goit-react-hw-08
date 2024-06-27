import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" className={styles.authNavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.authNavLink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
