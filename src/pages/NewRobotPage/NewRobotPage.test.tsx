import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";

import { render, screen } from "@testing-library/react";
import NewRobotPage from "./NewRobotPage";

describe("Given a New robot page", () => {
  describe("Wwhen is rendered", () => {
    test("Then it should show a heading with the text 'Here you can create a robot'", () => {
      const headerText = "Here you can create a robot";
      const store = setupStore({
        robotsStore: {
          robots: robotsMock,
        },
      });

      render(
        <Provider store={store}>
          <NewRobotPage />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
