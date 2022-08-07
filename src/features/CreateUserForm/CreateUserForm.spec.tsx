import { render, screen, fireEvent } from "@testing-library/react";
import {
  emailErrorField,
  maxValueField,
  minSizeField,
  minValueField,
  requiredFiled,
} from "../../constants/formError";
import CreateUserForm from "./CreateUserForm";

describe("tests CreateUserForm", () => {
  it("form should be render all fields and submit btn", () => {
    render(<CreateUserForm />);
    expect(screen.getByTestId("fieldName")).toBeInTheDocument();
    expect(screen.getByTestId("fieldLastName")).toBeInTheDocument();
    expect(screen.getByTestId("fieldAge")).toBeInTheDocument();
    expect(screen.getByTestId("fieldEmail")).toBeInTheDocument();
    expect(screen.getByTestId("buttonSubmit")).toBeInTheDocument();
  });

  it("field should shown Error", () => {
    render(<CreateUserForm />);

    fireEvent.click(screen.getByTestId("buttonSubmit"));
    expect(screen.getByTestId("fieldName")).toHaveTextContent(requiredFiled);
    expect(screen.getByTestId("fieldLastName")).toHaveTextContent(
      requiredFiled
    );
    expect(screen.getByTestId("fieldAge")).toHaveTextContent(minValueField(1));
    expect(screen.getByTestId("fieldEmail")).toHaveTextContent(requiredFiled);
    expect(screen.getByTestId("buttonSubmit")).toBeDisabled();
  });

  it("field shown error before invalid value", () => {
    const invalidFieldsData = {
      name: "a",
      lastName: "a",
      age: 200,
      email: "test",
    };
    render(<CreateUserForm />);

    const nameField = screen.getByTestId("fieldName");
    const lastNameField = screen.getByTestId("fieldLastName");
    const ageField = screen.getByTestId("fieldAge");
    const emailField = screen.getByTestId("fieldEmail");

    fireEvent.change(nameField.getElementsByTagName("input")[0], {
      target: {
        value: invalidFieldsData.name,
      },
    });

    fireEvent.change(lastNameField.getElementsByTagName("input")[0], {
      target: {
        value: invalidFieldsData.lastName,
      },
    });

    fireEvent.change(ageField.getElementsByTagName("input")[0], {
      target: {
        value: invalidFieldsData.age,
      },
    });

    fireEvent.change(emailField.getElementsByTagName("input")[0], {
      target: {
        value: invalidFieldsData.email,
      },
    });

    expect(nameField).toHaveTextContent(minSizeField(2));
    expect(lastNameField).toHaveTextContent(minSizeField(2));
    expect(ageField).toHaveTextContent(maxValueField(150));
    expect(emailField).toHaveTextContent(emailErrorField);
    expect(screen.getByTestId("buttonSubmit")).toBeDisabled();
  });
});
