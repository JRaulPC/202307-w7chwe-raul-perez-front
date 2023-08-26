import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Robots' inside a header", () => {
      const store = setupStore({
        robotsStore: {
          robots: robotsMock,
        },
      });

      const expectedHeading = "Robots";

      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
