import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered with the text 'Robots'", () => {
    test("Then it should show robots as a header", () => {
      const headerText = "Robots";

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
