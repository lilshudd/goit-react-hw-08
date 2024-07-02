import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.navLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
