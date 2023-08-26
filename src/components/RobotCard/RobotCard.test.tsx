import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";
import RobotCard from "./RobotCard";

describe("Given a RobotCard component", () => {
  describe("When it recives a robot name' R2-D2'", () => {
    test("Then it should show the name 'R2-D2' inside a heading", () => {
      const headingText = "R2-D2";
      const store = setupStore({ robotsStore: { robots: robotsMock } });
      const terminator = robotsMock[0];

      render(
        <Provider store={store}>
          <RobotCard robot={terminator} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
