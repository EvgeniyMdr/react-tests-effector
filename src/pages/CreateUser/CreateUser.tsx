import React from "react";
import { CreateUserForm } from "../../features/CreateUserForm";

const CreateUser = () => {
  return (
    <div className="container">
      <h1>Создать новый аккаунт пользователя</h1>
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;
