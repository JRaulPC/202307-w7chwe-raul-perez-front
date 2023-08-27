import { Provider } from "react-redux";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When all the textboxes are correctly filled and the user press the 'Create robot' button", () => {
    test("Then the header 'Who's the new robot?' should not be displayed", async () => {
      const headingText = "Who's the new robot?";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewRobotPage />
          </Provider>
        </BrowserRouter>,
      );

      const nameInputLabelText = "Name";
      const imageInputLabelText = "Image URL";
      const speedInputLabelText = "Speed";
      const enduranceInputLabelText = "Endurance";

      const nameInput = screen.getByLabelText(
        nameInputLabelText,
      ) as HTMLInputElement;
      const imageInput = screen.getByLabelText(
        imageInputLabelText,
      ) as HTMLInputElement;
      const speedInput = screen.getByLabelText(
        speedInputLabelText,
      ) as HTMLInputElement;
      const enduranceInput = screen.getByLabelText(
        enduranceInputLabelText,
      ) as HTMLInputElement;

      const name = "Roomba";
      const imageUrl =
        "https://s2.qwant.com/thumbr/0x38e-robin-dick-gra%2F%2Fanimesweet.com%2Fwp-content%2Fuploads%2F2021%";
      const speed = 1;
      const endurance = 10;

      const buttonText = "Create Robot";

      await userEvent.type(nameInput, name);
      await userEvent.type(imageInput, imageUrl);
      await userEvent.type(speedInput, speed.toString());
      await userEvent.type(enduranceInput, endurance.toString());

      const createButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(createButton);

      const heading = screen.getByRole("heading", { name: headingText });

      await waitFor(() => {
        expect(heading).toBeInTheDocument();
      });
    });
  });
});
