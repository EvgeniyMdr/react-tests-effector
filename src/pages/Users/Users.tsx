import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { UsersList } from "../../features/UsersList";
import "./styles.css";

const Users = () => {
  return (
    <div className="container">
      <div>
        <h2>Список пользователей</h2>
        <Link to="/users/create">
          <Button>Создать нового пользователя</Button>
        </Link>
      </div>
      <UsersList />
    </div>
  );
};

export default Users;
