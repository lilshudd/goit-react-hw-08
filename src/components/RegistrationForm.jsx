import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.registrationForm}>
        <label className={styles.registrationFormLabel} htmlFor="name">
          Name
        </label>
        <Field
          className={styles.registrationFormField}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <ErrorMessage
          className={styles.registrationFormError}
          name="name"
          component="div"
        />

        <label className={styles.registrationFormLabel} htmlFor="email">
          Email
        </label>
        <Field
          className={styles.registrationFormField}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <ErrorMessage
          className={styles.registrationFormError}
          name="email"
          component="div"
        />

        <label className={styles.registrationFormLabel} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.registrationFormField}
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
        <ErrorMessage
          className={styles.registrationFormError}
          name="password"
          component="div"
        />

        <button className={styles.registrationFormButton} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
