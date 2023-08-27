import { useEffect } from "react";
import { useAppDispatch } from "../..";
import RobotsList from "../../components/RobotsList/RobotsList";
import useRobotsApi from "../../hooks/useRobotsApi";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import "./RobotsListPages.css";

const RobotsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getRobots } = useRobotsApi();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [dispatch, getRobots]);

  return (
    <section className="robots-page">
      <h2 className="robots-page__heading">Robots List</h2>
      <RobotsList />
    </section>
  );
};

export default RobotsListPage;
