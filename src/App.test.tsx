import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import server from "./mocks/server";
import App from "./App";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("album page is rendered with all details", async () => {
  render(<App />, { wrapper: BrowserRouter });

  const title = screen.getByText("Album");
  expect(title).toBeInTheDocument();

  const description = await screen.findByText(
    "accusamus beatae ad facilis cum similique qui sunt"
  );
  expect(description).toBeInTheDocument();

  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(2);
  expect(images[0]).toHaveAttribute(
    "src",
    "https://via.placeholder.com/150/92c952"
  );
  expect(images[0]).toHaveAttribute(
    "alt",
    "accusamus beatae ad facilis cum similique qui sunt"
  );
});

test("photo detail page is rendered with all details", async () => {
  render(<App />, { wrapper: BrowserRouter });

  const user = userEvent.setup();

  const links = await screen.findAllByRole("link");
  expect(links[0]).toHaveAttribute("href", "/photo/1");

  user.click(links[0]);

  const buttonBack = await screen.findByRole("button", { name: /Back/ });
  expect(buttonBack).toBeInTheDocument();

  const image = await screen.findByRole("img");
  expect(image).toHaveAttribute(
    "src",
    "https://via.placeholder.com/600/92c952"
  );

  user.click(buttonBack);

  const title = await screen.findByText("Album");
  expect(title).toBeInTheDocument();
});

test("spinner is rendered", () => {
  render(<App />, { wrapper: BrowserRouter });

  const spinner = screen.getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});
