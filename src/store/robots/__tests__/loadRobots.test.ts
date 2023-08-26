import { robotsMock } from "../../../mocks/mocks";
import { Robot } from "../../../types";
import { loadRobotsActionCreator, robotsReducer } from "../robotsSlice";
import { RobotsState } from "../types";

describe("given a loarRobots reducer", () => {
  describe("When it receives a robotsState and a loadRobots action with 'R2-D2', 'Terminator' and 'Emilio", () => {
    test("Then it should return a new state with the three robots 'R2-D2','Terminator' and 'Emilio", () => {
      const currentRobotsState: RobotsState = {
        robots: [],
      };

      const robots: Robot[] = robotsMock;

      const loadRobotsAction = loadRobotsActionCreator(robots);
      const newRobotsState = robotsReducer(
        currentRobotsState,
        loadRobotsAction,
      );

      expect(newRobotsState).toHaveProperty("robots", robotsMock);
    });
  });
});
