import LoginForm from "../components/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
