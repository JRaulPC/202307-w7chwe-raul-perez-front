import { useEffect } from "react";
import { useAppDispatch } from "../..";
import RobotsList from "../../components/RobotsList/RobotsList";
import useRobotsApi from "../../hooks/useRobotsApi";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";

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
    <>
      <h2 className="robots-list-heading">These are the Robots</h2>
      <RobotsList />
    </>
  );
};

export default RobotsListPage;
