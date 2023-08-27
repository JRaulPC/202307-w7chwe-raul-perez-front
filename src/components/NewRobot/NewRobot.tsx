import { useEffect, useState } from "react";
import { Robot } from "../../types";
import "./Newrobot.css";

const NewRobot = (): React.ReactElement => {
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

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    name !== "" && image !== "" && speed !== 0 && endurance !== 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [endurance, image, name, speed]);

  return (
    <form className="form-robot">
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={newRobot.name}
          onChange={changeNewRobot}
        />
      </div>
      <div className="form-control">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={newRobot.image}
          onChange={changeNewRobot}
        />
      </div>
      <div className="form-control">
        <label htmlFor="endurance">Endurance</label>
        <input type="number" id="endurance" onChange={changeNewRobot} />
      </div>
      <div className="form-control">
        <label htmlFor="speed">Speed</label>
        <input type="number" id="speed" onChange={changeNewRobot} />
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
