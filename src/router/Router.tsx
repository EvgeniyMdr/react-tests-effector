import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { App } from "../pages/App";
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
      </Routes>
    </>
  );
};

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default Router;
