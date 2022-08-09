import { useStore } from "effector-react";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
  $userInfo,
  $userInfoStoreStatus,
  getUserInfoFx,
  UserInfoStoreStatus,
} from "./model";
import "./styles.css";

const DetailUser = () => {
  const { userId } = useParams();
  const statusStore = useStore($userInfoStoreStatus);
  const userInfo = useStore($userInfo);

  useEffect(() => {
    const id = userId ? parseInt(userId) : 0;
    getUserInfoFx(id);
  }, []);

  if (statusStore === UserInfoStoreStatus.Loading) {
    return <div>Загрузка информации пользователя</div>;
  }

  if (statusStore === UserInfoStoreStatus.Error) {
    return <div>Ошибка при получении данных пользователя</div>;
  }

  if (statusStore === UserInfoStoreStatus.Initial) {
    return null;
  }

  return (
    <div className="user-info">
      {userInfo && (
        <>
          <img
            className="user-info__img"
            src={userInfo.image}
            alt={userInfo.firstName}
          />
          <ul>
            <li>{userInfo.firstName}</li>
            <li>{userInfo.lastName}</li>
            <li>{userInfo.maidenName}</li>
            <li>{userInfo.age}</li>
            <li>{userInfo.birthDate}</li>
            <li>{userInfo.bloodGroup}</li>
            <li>{userInfo.email}</li>
            <li>{userInfo.domain}</li>
            <li>{userInfo.gender}</li>
            <li>{userInfo.eyeColor}</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default DetailUser;
