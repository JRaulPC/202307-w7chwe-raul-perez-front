import { rest } from "msw";
import { apiUrl } from "../hooks/useRobotsApi";
import { apiRobotsMock } from "./mocks";

export const handlers = [
  rest.get(`${apiUrl}/robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiRobotsMock));
  }),
];
