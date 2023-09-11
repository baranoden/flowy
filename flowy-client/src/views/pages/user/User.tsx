import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const nav = useNavigate();

  return (
    <div>
      User
      <a onClick={() => nav("/logout")}>logout</a>
    </div>
  );
};

export default User;
