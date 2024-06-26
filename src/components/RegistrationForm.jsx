import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

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
      <Form>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
