import { renderHook } from "@testing-library/react";
import { robotsMock } from "../../mocks/mocks";
import useRobotsApi from "../useRobotsApi";

describe("Given an useRobotsApi custom hook", () => {
  describe("When a function getRobots is called witha request to a database of robots", () => {
    test("Then it should return a list of robots", async () => {
      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useRobotsApi());

      const robots = await getRobots();

      expect(robots).toStrictEqual(robotsMock);
    });
  });
});
