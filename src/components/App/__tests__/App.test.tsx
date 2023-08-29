import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../../..";
import App from "../App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test.only("Then it should show the text 'Robots' inside a header", () => {
      const store = setupStore({
        uiStore: {
          isLoading: false,
          isError: false,
        },
      });

      const expectedHeading = "Robots";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });
      screen.debug();
      expect(heading).toBeInTheDocument();
    });
  });
});
