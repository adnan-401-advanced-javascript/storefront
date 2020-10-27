/* eslint-disable no-undef */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../redux";

test("render header", async () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
  );
  const app = screen.getByTestId("header");
  expect(app).toBeInTheDocument();
  await act(() => Promise.resolve());
});

test("render footer", async () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
  );
  const app = screen.getByTestId("footer");
  expect(app).toBeInTheDocument();
  await act(() => Promise.resolve());
});
