import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Robot } from "../../types";
import { RobotsState } from "./types";

const initialRobotsState: RobotsState = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotsState,
  reducers: {
    loadRobots: (
      currentRobotsState,
      action: PayloadAction<Robot[]>,
    ): RobotsState => ({
      ...currentRobotsState,
      robots: action.payload,
    }),

    addRobot: (
      currentRobotsState,
      action: PayloadAction<Robot>,
    ): RobotsState => ({
      ...currentRobotsState,
      robots: [...currentRobotsState.robots, action.payload],
    }),
  },
});

export const robotsReducer = robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;
