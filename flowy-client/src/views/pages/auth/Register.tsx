import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import CustomInput from "../../components/customInput/CustomInput";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authTypes } from "./store/types";
import { useDispatch } from "react-redux";
import { stepType } from "../../../libs/enumTypes/enumTypes";
import { useAppSelector } from "../../../redux/store";
import CustomSelect from "../../components/customSelect/CustomSelect";
import { occOptions } from "../../../libs/selectItems/selectItems";
import { parser } from "../../../libs/parser/parser";
import { useIntl } from "react-intl";

const Register: React.FC = () => {
  const intl = useIntl();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user: any = useAppSelector((state: any) => state.authSlice.user);
  const isLogged = useAppSelector((state: any) => state.authSlice.isLogged);

  const [step, setStep] = useState(stepType.first);
  const initialValues: any = {
    username: "",
    password: "",
    isadmin: false,
  };
  const secondValues: any = {
    info: "",
  };
  const { handleSubmit, handleChange, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: step === stepType.first ? initialValues : secondValues,
      validationSchema:
        step === stepType.first
          ? Yup.object({
              username: Yup.string().required(
                intl.formatMessage({ id: "USERNAME_REQUIRED" })
              ),
              password: Yup.string().required(
                intl.formatMessage({ id: "PASSWORD_REQUIRED" })
              ),
            })
          : Yup.object({
              info: Yup.string().required(
                intl.formatMessage({ id: "INFO_REQUIRED" })
              ),
            }),
      onSubmit: (values) => {
        if (step === stepType.first) {
          dispatch({
            type: authTypes.REGISTER,
            payload: values,
          });
        }
        if (step === stepType.second) {
          dispatch({
            type: authTypes.VALIDATE,
            payload: values,
          });
        }
      },
    });

  useEffect(() => {
    if (isLogged) {
      if (parser("currentUser").info !== "") {
        nav("/");
      } else {
        setStep(stepType.second);
      }
    }
  }, [isLogged, user]);

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
            <p>{intl.formatMessage({ id: "OCCUPATION_STEP" })}</p>
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{ width: "17rem" }}
          >
            {intl.formatMessage({ id: "OCCUPATION_DESC" })}
          </small>
        </div>
        <div className={`col-md-6 ${styles.rightBox}`}>
          <div className="row align-items-center">
            <div className="header-text mb-4">
              {step === stepType.first ? (
                <>
                  <h2>{intl.formatMessage({ id: "REGISTER_TITLE" })}</h2>
                  <p> {intl.formatMessage({ id: "REGISTER_SLOGAN" })}</p>
                </>
              ) : (
                <>
                  <h2>{intl.formatMessage({ id: "OCCUPATION_TITLE" })}</h2>
                  <p> {intl.formatMessage({ id: "OCCUPATION_SLOGAN" })}</p>
                </>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              {step === stepType.first && (
                <>
                  <div className="input-group mb-3">
                    <CustomInput
                      type="text"
                      name="username"
                      placeholder={intl.formatMessage({ id: "USERNAME" })}
                      className="form-control form-control-lg bg-light fs-6"
                      value={values?.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-1">
                    <CustomInput
                      type="password"
                      name="password"
                      placeholder={intl.formatMessage({ id: "PASSWORD" })}
                      className="form-control form-control-lg bg-light fs-6"
                      value={values?.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-5 d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="isadmin"
                        onChange={handleChange}
                      />
                      <label className="form-check-label text-secondary">
                        <small>
                          {intl.formatMessage({ id: "WANNA_BE_ADMIN" })}
                        </small>
                      </label>
                    </div>
                  </div>
                </>
              )}
              {step === stepType.second && (
                <>
                  <CustomSelect
                    placeholder={intl.formatMessage({ id: "OCCUPATION" })}
                    options={occOptions}
                    closeMenuOnSelect
                    onChange={(e: { value: number; label: string }) => {
                      setFieldValue("info", e.value);
                    }}
                  />
                </>
              )}
              <div className="input-group mb-3 mt-4">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-100 fs-6"
                >
                  {step === stepType.first
                    ? intl.formatMessage({ id: "REGISTER" })
                    : intl.formatMessage({ id: "BEGIN" })}
                </button>
              </div>
            </form>
            {step === stepType.first && (
              <>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-light w-100 fs-6">
                    <small>
                      {intl.formatMessage({ id: "SIGN_WITH_GOOGLE" })}
                    </small>
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
                    {intl.formatMessage({ id: "ALREADY_HAVE_ACC" })}{" "}
                    <Link to="/login">
                      {intl.formatMessage({ id: "LOGIN" })}
                    </Link>
                  </small>
                </div>
              </>
            )}
            {errors.info && (
              <p style={{ color: "red" }}>{errors.info as any}</p>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Register;
