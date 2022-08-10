import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { App } from "../pages/App";
import { CreateUser } from "../pages/CreateUser";
import { User } from "../pages/User";
import { Users } from "../pages/Users";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/users/create" element={<CreateUser />} />
      </Routes>
    </>
  );
};

export default Router;
