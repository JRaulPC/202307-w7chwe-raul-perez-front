import { Robot } from "../../types";
import "./RobotCard.css";

export interface RobotCardProps {
  robot: Partial<Robot>;
}

const RobotCard = ({
  robot: { name, image, endurance, speed },
}: RobotCardProps): React.ReactElement => {
  return (
    <article className="robot-card">
      <img
        className="robot-card__image"
        src={image}
        alt={`The robot ${name}`}
        width="250"
        height="250"
      />
      <h1 className="robot-card__title">{name}</h1>
      <ul className="robot-card__properties">
        <li className="robot-card__property">Endurance:{endurance}</li>
        <li className="robot-card__property">Speed:{speed}</li>
      </ul>
    </article>
  );
};

export default RobotCard;
