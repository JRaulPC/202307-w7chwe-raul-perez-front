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

  describe("When an user types all the data for the robot 'Roomba'", () => {
    const name = "Roomba";
    const imageUrl =
      "https://s2.qwant.com/thumbr/0x380/d/8/5296e3ceaa1f6f98c7aa54081ec63ef71eaf324aa5c18ace6373c517de5a7a/batman-c-e-robin-dick-grayson-verita-robins-1-v3-534607-1536x864.jpg?u=https%3A%2F%2Fanimesweet.com%2Fwp-content%2Fuploads%2F2021%2F08%2Fbatman-c-e-robin-dick-grayson-verita-robins-1-v3-534607-1536x864.jpg&q=0&b=1&p=0&a=0";
    const speed = 1;
    const endurance = 10;

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
      const buttonText = "Create Robot";

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
