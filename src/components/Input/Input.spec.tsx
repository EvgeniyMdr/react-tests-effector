import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input tests", () => {
  it("render Input component", () => {
    const labelText = "Input label";
    const placeholder = "placeholder";
    const inputValue = "textValue";
    render(
      <Input
        label={labelText}
        placeholder={placeholder}
        value={inputValue}
        onChange={() => {}}
      />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    expect(screen.getByDisplayValue(inputValue)).toBeInTheDocument();
  });

  it("input should trigger change event", () => {
    const labelText = "Input label";
    const changedValue = "changedValue";
    const inputValue = "inputValue";

    const changeHandler = jest.fn();

    render(
      <Input value={inputValue} label={labelText} onChange={changeHandler} />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: changedValue },
    });

    expect(changeHandler).toBeCalled();
  });

  it("input component do not should render label", () => {
    const { container } = render(<Input value={""} onChange={() => {}} />);

    expect(container.getElementsByTagName("span").length).toEqual(0);
  });

  it("input should trigger focusEvent", () => {
    const focusHandler = jest.fn();
    render(<Input value={""} onChange={() => {}} onFocus={focusHandler} />);

    fireEvent.focus(screen.getByRole("textbox"));

    expect(focusHandler).toBeCalled();
  });

  it("input should trigger focusEvent and blurEvent", () => {
    const focusHandler = jest.fn();
    const blurHandler = jest.fn();
    render(
      <Input
        value={""}
        onChange={() => {}}
        onFocus={focusHandler}
        onBlur={blurHandler}
      />
    );

    fireEvent.focus(screen.getByRole("textbox"));
    fireEvent.blur(screen.getByRole("textbox"));

    expect(focusHandler).toBeCalled();
    expect(blurHandler).toBeCalled();
  });
});
