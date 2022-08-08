import React from "react";
import { useForm } from "effector-forms";
import { form } from "./model";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import "./styles.css";

const CreateUserForm = () => {
  const { submit, fields, eachValid } = useForm(form);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  console.log("file", fields.name.errorText());

  return (
    <form className="create-form" onSubmit={onSubmit}>
      <Input
        label="Имя"
        name={fields.name.name}
        value={fields.name.value}
        onBlur={() => fields.name.onBlur()}
        onChange={(e) => fields.name.onChange(e.target.value)}
        error={!fields.name.isValid}
        errorText={fields.name.errorText()}
        testId="fieldName"
      />
      <Input
        label="Фамилия"
        name={fields.lastName.name}
        value={fields.lastName.value}
        onBlur={() => fields.lastName.onBlur()}
        onChange={(e) => fields.lastName.onChange(e.target.value)}
        error={!fields.lastName.isValid}
        errorText={fields.lastName.errorText()}
        testId="fieldLastName"
      />
      <Input
        label="Возраст"
        name={fields.age.name}
        value={fields.age.value}
        inputType="number"
        onBlur={() => fields.age.onBlur()}
        onChange={(e) => fields.age.onChange(parseInt(e.target.value))}
        error={!fields.age.isValid}
        errorText={fields.age.errorText()}
        testId="fieldAge"
      />
      <Input
        label="Email"
        name={fields.email.name}
        value={fields.email.value}
        onBlur={() => fields.email.onBlur()}
        onChange={(e) => fields.email.onChange(e.target.value)}
        error={!fields.email.isValid}
        errorText={fields.email.errorText()}
        testId="fieldEmail"
      />
      <Button type="submit" disabled={!eachValid} testId="buttonSubmit">
        Отправить
      </Button>
    </form>
  );
};

export default CreateUserForm;
