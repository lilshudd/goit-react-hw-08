import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
