import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/users">Пользователи</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;