import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { robotsMock } from "../../mocks/mocks";
import { server } from "../../mocks/serve";
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

  describe("When a function getRobots is called witha request to a database of robots", () => {
    test("Then it should show a 'Can't get robots right now!' message on console", async () => {
      const expectedError = new Error("Can't get robots right now");
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useRobotsApi());

      const robots = getRobots();

      expect(robots).rejects.toThrowError(expectedError);
    });
  });
});
