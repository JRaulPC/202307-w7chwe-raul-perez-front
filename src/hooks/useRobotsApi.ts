import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch } from "..";
import {
  showErrorActionCreator,
  startLoadingActionCreator,
  stopLoadingActionCreator,
} from "../store/ui/uiSlice";
import { ApiRobots, Robot } from "../types";

export const apiUrl = import.meta.env.VITE_API_URL;

const useRobotsApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async (): Promise<Robot[]> => {
    dispatch(startLoadingActionCreator());

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

      dispatch(stopLoadingActionCreator());
      return robots;
    } catch {
      dispatch(showErrorActionCreator());
      throw new Error("Can't get robots right now");
    }
  }, [dispatch]);

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
