import axios from "axios";
import { useCallback } from "react";
import { ApiRobot, Robot } from "../types";

export const apiUrl = import.meta.env.MONGODB_URL;

const useRobotsApi = () => {
  const getRobots = useCallback(async (): Promise<Robot[]> => {
    try {
      const { data: apiRobots } = await axios.get<ApiRobot[]>(
        `${apiUrl}/robots`,
      );

      const robots = apiRobots.map<Robot>(
        ({ _id, endurance, image, name, speed }) => ({
          id: +_id,
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

  return { getRobots };
};

export default useRobotsApi;
