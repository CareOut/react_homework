import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { BrowserRouter, Link } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing component", () => {
  test("expect render component Header", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test("shoulde find button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("Chats")).toBeInTheDocument();
  });
});
