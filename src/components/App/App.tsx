import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../..";
import NewRobotPage from "../../pages/NewRobotPage/NewRobotPage";
import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import paths from "../../paths/paths";
import ErrorFeedback from "../ErrorFeedback/ErroFeedback";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  const isError = useAppSelector((state) => state.uiStore.isError);

  return (
    <>
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
      </div>
    </>
  );
};

export default App;
