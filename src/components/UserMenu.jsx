import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { selectUser } from "../redux/auth/selectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userMenu}>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        className={styles.logoutButton}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
