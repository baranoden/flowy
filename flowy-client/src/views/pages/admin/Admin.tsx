import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/customButton/CustomButton";

const Admin = () => {
  const nav = useNavigate();
  const intl = useIntl();

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center flex-column align-items-center mb-3">
        <h1 className="mb-5">
          {intl.formatMessage({ id: "WELCOME_TO_ADMIN_PAGE" })}
        </h1>
        <span className="mb-2">
          {intl.formatMessage({ id: "NOTHING_TO_SEE_HERE" })}
        </span>
        <span className="mb-2">
          {intl.formatMessage({ id: "THIS_PAGE_IS_NOT_PUBLIC" })}
        </span>
        <span className="mt-5">
          {intl.formatMessage({ id: "WANT_TO_LOG_OUT" })}
        </span>
      </div>
      <div className="d-flex justify-content-center">
        <CustomButton
          onClick={() => nav("/logout")}
          holder={intl.formatMessage({ id: "LOGOUT" })}
        />
      </div>
    </div>
  );
};

export default Admin;
