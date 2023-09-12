import React, { useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authTypes } from "./store/types";
import { useIntl } from "react-intl";

const Login: React.FC = () => {
  const intl = useIntl();
  const isLogged = useAppSelector((state: any) => state.authSlice.isLogged);
  const user: any = useAppSelector((state: any) => state.authSlice.user);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const initialValues: any = {
    username: "",
    password: "",
  };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required(
        intl.formatMessage({ id: "USERNAME_REQUIRED" })
      ),
      password: Yup.string().required(
        intl.formatMessage({ id: "PASSWORD_REQUIRED" })
      ),
    }),
    onSubmit: (values) => {
      dispatch({
        type: authTypes.LOGIN,
        payload: values,
      });
    },
  });
  useEffect(() => {
    if (isLogged) {
      if (user.info !== "") {
        nav("/");
      } else {
        nav("/register");
      }
    }
  }, [isLogged]);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row
        className={`border  p-3 bg-white shadow ${styles.boxArea} ${styles.rounded5}`}
      >
        <div
          className={`col-md-6  d-flex justify-content-center align-items-center flex-column ${styles.leftBox} ${styles.rounded4}`}
          style={{ background: "#103cbe" }}
        >
          <p className="text-white fs-2" style={{ fontWeight: "600;" }}>
            {intl.formatMessage({ id: "LOGIN_TITLE" })}
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{ width: "17rem" }}
          >
            {intl.formatMessage({ id: "LOGIN_DESC" })}
          </small>
        </div>
        <div className={`col-md-6 ${styles.rightBox}`}>
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>{intl.formatMessage({ id: "LOGIN_ONBOARD" })}</h2>
              <p> {intl.formatMessage({ id: "LOGIN_SLOGAN" })}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3 d-flex">
                <CustomInput
                  type="text"
                  name="username"
                  placeholder={intl.formatMessage({ id: "USERNAME" })}
                  className="form-control form-control-lg bg-light fs-6"
                  value={values?.username}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-1 d-flex">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder={intl.formatMessage({ id: "PASSWORD" })}
                  className="form-control form-control-lg bg-light fs-6"
                  value={values?.password}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3 mt-4">
                <button className="btn btn-lg btn-primary w-100 fs-6">
                  {intl.formatMessage({ id: "LOGIN" })}
                </button>
              </div>
            </form>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-light w-100 fs-6">
                <small>{intl.formatMessage({ id: "SIGN_WITH_GOOGLE" })}</small>
              </button>
            </div>
            {touched.password && errors.password && (
              <p style={{ color: "red" }}>{errors.password as any}</p>
            )}
            {touched.username && errors.username && (
              <p style={{ color: "red" }}>{errors.username as any}</p>
            )}
            <div className="row">
              <small>
                {intl.formatMessage({ id: "DONT_HAVE_ACC" })}{" "}
                <Link to="/register">
                  {intl.formatMessage({ id: "REGISTER" })}
                </Link>
              </small>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Login;
