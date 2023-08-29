import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewRobotPage from "./NewRobotPage";

describe("Given a New robot page", () => {
  const headerText = "Who's the new robot?";
  const store = setupStore({
    robotsStore: {
      robots: robotsMock,
    },
  });

  describe("When is rendered", () => {
    test("Then it should show a heading with the text 'Who's the new robot'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewRobotPage />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
