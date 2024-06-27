import RegistrationForm from "../components/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
