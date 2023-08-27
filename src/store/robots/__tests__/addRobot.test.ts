import { robotsMock } from "../../../mocks/mocks";
import { Robot } from "../../../types";
import { addRobotActionCreator, robotsReducer } from "../robotsSlice";
import { RobotsState } from "../types";

describe("Given an addRobots reducer", () => {
  describe("When it receives a robotState and an addRobots action with the robot 'Roomba'", () => {
    test("Then it should return a new state with a collection of robots and the robot 'Roomba' on it", () => {
      const currentRobotsState: RobotsState = {
        robots: robotsMock,
      };

      const roomba: Robot = {
        id: "1",
        name: "Roomba",
        speed: 2,
        endurance: 3,
        image:
          "https://s2.qwant.com/thumbr/0x380/e/f/3d90a36e1762453206beb0a506a10ee32d5af96bf22f9a4f934fee9043ea9e/roomba-605-arvostelu.jpg?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Froomba-605-arvostelu.jpg&q=0&b=1&p=0&a=0",
      };

      const addRobotAction = addRobotActionCreator(roomba);
      const newRobotsState = robotsReducer(currentRobotsState, addRobotAction);

      expect(newRobotsState.robots).toContain(roomba);
    });
  });
});
