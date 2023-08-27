import axios from "axios";
import { useCallback } from "react";
import { ApiRobots, Robot } from "../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useRobotsApi = () => {
  const getRobots = useCallback(async (): Promise<Robot[]> => {
    try {
      const { data: apiRobots } = await axios.get<ApiRobots>(
        `${apiUrl}/robots`,
      );

      const apiRobotsToMap = apiRobots.robots;

      const robots = apiRobotsToMap.map<Robot>(
        ({ _id, endurance, image, name, speed }) => ({
          id: _id,
          endurance,
          image,
          name,
          speed,
        }),
      );

      return robots;
    } catch {
      throw new Error("Can't get robots right now");
    }
  }, []);

  const addRobot = async (robot: Partial<Robot>): Promise<Robot> => {
    const { data: newRobot } = await axios.post<Robot>(
      `${apiUrl}/robots`,
      robot,
    );

    return newRobot;
  };

  return { getRobots, addRobot };
};

export default useRobotsApi;
