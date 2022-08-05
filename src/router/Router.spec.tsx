import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Router from "./Router";

describe("Router tests", () => {
  it("should render the home page", () => {
    render(<Router />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Testing app/i)).toBeInTheDocument();
  });

  it("should render header", () => {
    render(<Router />, { wrapper: BrowserRouter });

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Пользователи/i)).toBeInTheDocument();
  });

  it("should navigate to Users page", async () => {
    render(<Router />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Пользователи/i)).toBeInTheDocument();

    await userEvent.click(screen.getByText(/Пользователи/i));

    expect(screen.getByText(/Список пользователей/i)).toBeInTheDocument();
  });
});
