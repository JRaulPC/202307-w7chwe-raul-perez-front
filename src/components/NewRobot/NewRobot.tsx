import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../..";
import useRobotsApi from "../../hooks/useRobotsApi";
import { addRobotActionCreator } from "../../store/robots/robotsSlice";
import { Robot } from "../../types";
import "./NewRobot.css";

const NewRobot = (): React.ReactElement => {
  const { addRobot } = useRobotsApi();
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);

  const [newRobot, setNewRobot] = useState<Partial<Robot>>({
    name: "",
    image: "",
    speed: 0,
    endurance: 0,
  });

  const changeNewRobot = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewRobot((newRobot) => ({
      ...newRobot,
      [event.target.id]: event.target.value,
    }));
  };

  const { name, image, endurance, speed } = newRobot;

  useEffect(() => {
    name !== "" && image !== "" && speed !== 0 && endurance !== 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [endurance, image, name, speed]);

  const navigate = useNavigate();

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const robot: Robot = await addRobot(newRobot);

    dispatch(addRobotActionCreator(robot));
    navigate("/robots");
  };

  return (
    <form className="form-robot" onSubmit={submitForm}>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={newRobot.name}
          onChange={changeNewRobot}
          maxLength={50}
        />
      </div>
      <div className="form-control">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={newRobot.image}
          onChange={changeNewRobot}
          maxLength={500}
        />
      </div>
      <div className="form-control">
        <label htmlFor="endurance">Endurance</label>
        <input
          type="number"
          max="10"
          id="endurance"
          onChange={changeNewRobot}
        />
      </div>
      <div className="form-control">
        <label htmlFor="speed">Speed</label>
        <input type="number" id="speed" onChange={changeNewRobot} max="10" />
      </div>
      <div className="form-control__button">
        <button disabled={disabled} type="submit" className="form__button">
          Create Robot
        </button>
      </div>
    </form>
  );
};

export default NewRobot;
