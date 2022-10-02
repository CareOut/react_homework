import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { BrowserRouter, Link } from "react-router-dom";
import { Profile } from "../pages/Profile";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("profile reducer test, while click on the checkbox appear string 'Default'", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>
  );
  const button = screen.getByRole("checkbox");
  await userEvent.click(button);
  const text = await screen.getByText("Default");
  expect(text).toBeInTheDocument();
});
