import { useStore } from "effector-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  $statusUsersStore,
  $users,
  getUsersFx,
  StatusUsersStore,
} from "./model";
import "./style.css";

const UsersList = () => {
  const statusStore = useStore($statusUsersStore);
  const usersList = useStore($users);

  useEffect(() => {
    getUsersFx();
  }, []);

  if (statusStore === StatusUsersStore.Loading) {
    return <div>Загрузка списка пользователей</div>;
  }

  if (statusStore === StatusUsersStore.Error) {
    return <div>Ошибка при получении списка пользователей</div>;
  }

  if (statusStore === StatusUsersStore.Initial) {
    return null;
  }

  return (
    <ul className="users-list">
      {usersList.map((el) => (
        <Link className="users-list__item" to={`/users/${el.id}`} key={el.id}>
          <li>
            <img
              className="users-list__img"
              src={el.image}
              alt={`avatar-${el.firstName}`}
            />
            <p>Имя: {el.firstName}</p>
            <p>Пол: {el.gender}</p>
            <p>Возраст: {el.age} лет</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default UsersList;
