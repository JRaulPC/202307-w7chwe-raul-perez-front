import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../..";
import NewRobotPage from "../../pages/NewRobotPage/NewRobotPage";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import paths from "../../paths/paths";
import ErrorFeedback from "../ErrorFeedback/ErroFeedback";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
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
            <Route path={paths.robots} element={<RobotsListPage />} />
            <Route path={paths.newRobot} element={<NewRobotPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
