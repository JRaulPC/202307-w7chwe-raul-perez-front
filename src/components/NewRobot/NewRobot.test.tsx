import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../..";
import { robotsMock } from "../../mocks/mocks";
import NewRobot from "./NewRobot";

describe("given a NewRobot component", () => {
  const store = setupStore({
    robotsStore: {
      robots: robotsMock,
    },
  });

  const nameInputLabelText = "Name";
  const imageInputLabelText = "Image URL";
  const speedInputLabelText = "Speed";
  const enduranceInputLabelText = "Endurance";

  describe("When it's rendered", () => {
    test("Then it should show the fields 'name', 'image', 'speed' and 'endurance", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewRobot />
          </Provider>
        </BrowserRouter>,
      );

      const nameInput = screen.getByLabelText(nameInputLabelText);
      const imageInput = screen.getByLabelText(imageInputLabelText);
      const speedInput = screen.getByLabelText(speedInputLabelText);
      const enduranceInput = screen.getByLabelText(enduranceInputLabelText);

      expect(nameInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(enduranceInput).toBeInTheDocument();
    });
  });

  const name = "Roomba";
  const imageUrl =
    "https://s2.qwant.com/thumbr/0x38e-robin-dick-gra%2F%2Fanimesweet.com%2Fwp-content%2Fuploads%2F2021%";
  const speed = 1;
  const endurance = 10;

  const buttonText = "Create Robot";

  describe("When an user types all the data for the robot 'Roomba'", () => {
    test("Then it should show the typed data about 'Roomba' in the input textboxes", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewRobot />
          </Provider>
        </BrowserRouter>,
      );

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

      await userEvent.type(nameInput, name);
      await userEvent.type(imageInput, imageUrl);
      await userEvent.type(speedInput, speed.toString());
      await userEvent.type(enduranceInput, endurance.toString());

      expect(nameInput.value).toBe(name);
      expect(imageInput.value).toBe(imageUrl);
      expect(speedInput.value).toBe(speed.toString());
      expect(enduranceInput.value).toBe(endurance.toString());
    });

    test("Then the create 'Create robot' button should be ennabled", async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NewRobot />
          </Provider>
        </BrowserRouter>,
      );

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

      await userEvent.type(nameInput, name);
      await userEvent.type(imageInput, imageUrl);
      await userEvent.type(speedInput, speed.toString());
      await userEvent.type(enduranceInput, endurance.toString());

      const createButton = screen.getByRole("button", { name: buttonText });

      expect(createButton).toHaveProperty("disabled", false);
    });
  });
});
