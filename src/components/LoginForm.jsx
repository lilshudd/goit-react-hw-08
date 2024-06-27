import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={styles.loginForm}>
        <label className={styles.loginFormLabel} htmlFor="email">
          Email
        </label>
        <Field
          className={styles.loginFormField}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <ErrorMessage
          className={styles.loginFormError}
          name="email"
          component="div"
        />

        <label className={styles.loginFormLabel} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.loginFormField}
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <ErrorMessage
          className={styles.loginFormError}
          name="password"
          component="div"
        />

        <button className={styles.loginFormButton} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
