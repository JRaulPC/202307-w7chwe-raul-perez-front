import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe } from "vitest";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When is rendered", () => {
    test("Then it should show a text 'Robots'");
    const footerText = "Robots";

    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    const footer = screen.getByText(footerText);

    expect(footer).toBeInTheDocument();
  });
});
