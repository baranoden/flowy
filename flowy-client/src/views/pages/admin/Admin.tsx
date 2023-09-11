import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const nav = useNavigate();

  return (
    <div>
      Admin
      <a onClick={() => nav("/logout")}>logout</a>
    </div>
  );
};

export default Admin;
