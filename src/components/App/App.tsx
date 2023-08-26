import RobotsListPage from "../../pages/RobotsListPage/RobotsListPage";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <RobotsListPage />
    </div>
  );
};

export default App;
