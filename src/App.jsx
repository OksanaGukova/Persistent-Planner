import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { selectIsRefreshing } from "./redux/auth/selectors";
import { Layout } from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import Day from "./components/Day/Day";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const UsersPage = lazy(() => import("./pages/UsersPage/UsersPage"));
const TasksForDayPage = lazy(() => import("./pages/TasksForDayPage/TasksForDayPage"));
const TasksPage = lazy(() => import("./pages/TasksPage/TasksPage"));

export const App = () => {
  const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  if (isRefreshing) {
    return <div>Refreshing user...</div>;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/tasks"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<UsersPage />} />
          }
        />
        <Route
          path="/tasks/day"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksForDayPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App


