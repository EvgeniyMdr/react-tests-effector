import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="header__list">
            <li className="header__list-item">
              <Link className="header__link" to="/">
                Главная
              </Link>
            </li>
            <li className="header__list-item">
              <Link className="header__link" to="/users">
                Пользователи
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
