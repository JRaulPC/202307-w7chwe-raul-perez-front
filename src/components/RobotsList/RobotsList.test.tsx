import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";
import RobotsList from "./RobotsList";

describe("Given a RobotCard component", () => {
  describe("When is rendered with 'R2-D2, Emilio and 'Terminator ", () => {
    test("Then it should show the robot names 'R2-D2, Emilio, 'Terminator inside headings", () => {
      const store = setupStore({ robotsStore: { robots: robotsMock } });

      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>,
      );

      robotsMock.forEach((robot) => {
        const expectedHeading = screen.getByRole("heading", {
          name: robot.name,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });
});
