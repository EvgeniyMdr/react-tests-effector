import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button tests", () => {
  it("render Button components", () => {
    const labelText = "button text";
    render(<Button label={labelText} onClick={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("button should trigger click event", () => {
    const clickHandler = jest.fn();

    render(<Button label="" onClick={clickHandler} />);

    fireEvent.click(screen.getByRole("button"));

    expect(clickHandler).toBeCalled();
  });

  it("button should disabled", () => {
    render(<Button label="" onClick={() => {}} disabled={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("button should not disabled", () => {
    render(<Button label="" onClick={() => {}} disabled={false} />);

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
