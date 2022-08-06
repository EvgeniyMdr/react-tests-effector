import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button tests", () => {
  it("render Button components", () => {
    const labelText = "button text";
    render(<Button>{labelText}</Button>);
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("button should trigger click event", () => {
    const clickHandler = jest.fn();

    render(<Button onClick={clickHandler} />);

    fireEvent.click(screen.getByRole("button"));

    expect(clickHandler).toBeCalled();
  });

  it("button should disabled", () => {
    render(<Button disabled={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("button should not disabled", () => {
    render(<Button disabled={false} />);

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
