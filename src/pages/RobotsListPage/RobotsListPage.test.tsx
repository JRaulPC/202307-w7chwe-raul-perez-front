import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";
import RobotsListPage from "./RobotsListPage";

describe("Given a Robots list page", () => {
  describe("When is rendered", () => {
    test("Then it should show a heading with the text 'These are the robots'", () => {
      const headerText = "Robots List";
      const store = setupStore({
        robotsStore: {
          robots: robotsMock,
        },
      });

      render(
        <Provider store={store}>
          <RobotsListPage />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
