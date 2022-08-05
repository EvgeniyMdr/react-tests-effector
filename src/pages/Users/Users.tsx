import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h2>Список пользователей</h2>
      <Link to={`/users/${1}`}>To User 1</Link>
    </div>
  );
};

export default Users;
