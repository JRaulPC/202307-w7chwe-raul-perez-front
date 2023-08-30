import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../..";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NewRobotPage from "../../pages/NewRobotPage/NewRobotPage";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import paths from "../../paths/paths";
import ErrorFeedback from "../ErrorFeedback/ErroFeedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

const App = (): React.ReactElement => {
  const isError = useAppSelector((state) => state.uiStore.isError);
  const isLoading = useAppSelector((state) => state.uiStore.isLoading);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorFeedback />}
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to={paths.robots} />} />
            <Route path="/home" element={<Navigate to={paths.robots} />} />
            <Route
              path={paths.robots}
              element={
                <ProtectedRoute>
                  <RobotsListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path={paths.newRobot}
              element={
                <ProtectedRoute>
                  <NewRobotPage />
                </ProtectedRoute>
              }
            />
            <Route path={paths.loginPage} element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
