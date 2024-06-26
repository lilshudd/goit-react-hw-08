import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../src/redux/auth/operations";
import { selectIsRefreshing } from "../src/redux/auth/selectors";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";
import HomePage from "../src/pages/HomePage";
import RegistrationPage from "../src/pages/RegistrationPage";
import LoginPage from "../src/pages/LoginPage";
import ContactsPage from "../src/pages/ContactsPage";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
