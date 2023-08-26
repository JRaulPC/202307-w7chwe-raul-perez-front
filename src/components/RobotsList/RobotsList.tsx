import { useAppSelector } from "../..";
import RobotCard from "../RobotCard/RobotCard";
import "./RobotsList.css";

const RobotsList = (): React.ReactElement => {
  const robots = useAppSelector(({ robotsStore: { robots } }) => robots);

  return (
    <ul className="robots-page__list">
      {robots.map((robot) => (
        <li key={robot.id} className="robot-list__robot">
          <RobotCard robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default RobotsList;
