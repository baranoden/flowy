import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const General = () => {
  const nav = useNavigate();

  return (
    <div>
      General
      <a onClick={() => nav("/logout")}>logout</a>
    </div>
  );
};

export default General;
