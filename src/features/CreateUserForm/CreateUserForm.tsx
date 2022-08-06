import React from "react";
import { useForm } from "effector-forms";
import { form } from "./model";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const CreateUserForm = () => {
  const { submit, fields, eachValid } = useForm(form);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit();
  };

  console.log("file", fields.name.isValid);

  return (
    <form onSubmit={onSubmit}>
      <Input
        name={fields.name.name}
        value={fields.name.value}
        onBlur={() => fields.name.onBlur()}
        onChange={(e) => fields.name.onChange(e.target.value)}
        error={!fields.name.isValid}
        errorText={"Ошибка"}
      />
      <Input
        name={fields.lastName.name}
        value={fields.lastName.value}
        onBlur={() => fields.lastName.onBlur()}
        onChange={(e) => fields.lastName.onChange(e.target.value)}
        error={!fields.lastName.isValid}
        errorText={"Ошибка"}
      />
      <Button type="submit" disabled={!eachValid}>
        Отправить
      </Button>
    </form>
  );
};

export default CreateUserForm;
