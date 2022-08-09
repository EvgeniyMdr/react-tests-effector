import React from "react";
import { useParams } from "react-router-dom";
import { DetailUser } from "../../features/DetailUser";

const User = () => {
  return (
    <div className="container">
      <DetailUser />
    </div>
  );
};

export default User;
