import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate();

  return (
    <div>
      Dashboard
      <a onClick={() => nav("/logout")}>logout</a>
    </div>
  );
};

export default Dashboard;
