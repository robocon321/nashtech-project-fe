import { Alert } from "@mui/material";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { SignUpContext } from "@providers/auth/SignUpProvider";
import styles from "./Auth.module.css";

const SignUp = (props) => {
  const { signUpState, changeField, signUp } = useContext(SignUpContext);

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up TienDa Store" />
      </Helmet>
      <div className={styles["limiter"]}>
      <div className={styles["container-login100"]}>
        <div
          className={
            styles["wrap-login100"] +
            " " +
            styles["p-l-110"] +
            " " +
            styles["p-r-110"] +
            " " +
            styles["p-t-62"] +
            " " +
            styles["p-b-33"]
          }
        >
          <form
            className={
              styles["login100-form"] +
              " " +
              styles["validate-form"] +
              " " +
              styles["flex-sb"] +
              " " +
              styles["flex-w"]
            }
          >
            <span
              className={styles["login100-form-title"] + " " + styles["p-b-53"]}
            >
              Sign Up With
            </span>
            <div className="alert">
              {signUpState.status.message && !signUpState.status.success && (
                <Alert severity="warning">{signUpState.status.message}</Alert>
              )}
            </div>

            <a
              href={`http://localhost:8080/oauth2/authorization/facebook`}
              className={styles["btn-face"] + " " + styles["m-b-20"]}
            >
              Facebook
            </a>

            <a
              href={`http://localhost:8080/oauth2/authorization/google`}
              className={styles["btn-google"] + " " + styles["m-b-20"]}
            >
              <img src="images/icons/icon-google.png" alt="GOOGLE" />
              Google
            </a>

            <div className={styles["p-t-31"] + " " + styles["p-b-9"]}>
              <span className={styles["txt1"]}>Username</span>
            </div>

            <div
              className={
                styles["wrap-input100"] + " " + styles["validate-input"]
              }
              data-validate="Username is required"
            >
              <input
                className={styles["input100"]}
                type="text"
                name="username"
                onChange={changeField}
              />
              <span className={styles["focus-input100"]}></span>
            </div>

            <div className={styles["p-t-31"] + " " + styles["p-b-9"]}>
              <span className={styles["txt1"]}>Full name</span>
            </div>

            <div
              className={
                styles["wrap-input100"] + " " + styles["validate-input"]
              }
              data-validate="First name is required"
            >
              <input
                className={styles["input100"]}
                type="text"
                name="fullname"
                onChange={changeField}
              />
              <span className={styles["focus-input100"]}></span>
            </div>

            <div className={styles["p-t-31"] + " " + styles["p-b-9"]}>
              <span className={styles["txt1"]}>Email</span>
            </div>

            <div
              className={
                styles["wrap-input100"] + " " + styles["validate-input"]
              }
              data-validate="Email is required"
            >
              <input
                className={styles["input100"]}
                type="email"
                name="email"
                onChange={changeField}
              />
              <span className={styles["focus-input100"]}></span>
            </div>

            <div className={styles["p-t-31"] + " " + styles["p-b-9"]}>
              <span className={styles["txt1"]}>Phone</span>
            </div>

            <div
              className={
                styles["wrap-input100"] + " " + styles["validate-input"]
              }
              data-validate="Phone is required"
            >
              <input
                className={styles["input100"]}
                type="text"
                name="phone"
                onChange={changeField}
              />
              <span className={styles["focus-input100"]}></span>
            </div>

            <div className={styles["p-t-13"] + " " + styles["p-b-9"]}>
              <span className={styles["txt1"]}>Password</span>
            </div>
            <div
              className={
                styles["wrap-input100"] + " " + styles["validate-input"]
              }
              data-validate="Password is required"
            >
              <input
                className={styles["input100"]}
                type="password"
                name="password"
                onChange={changeField}
              />
              <span className={styles["focus-input100"]}></span>
            </div>

            <div className={styles["p-t-13"] + " " + styles["p-b-9"]}>
              <span className={styles["txt1"]}>Retype Password</span>
            </div>
            <div
              className={
                styles["wrap-input100"] + " " + styles["validate-input"]
              }
              data-validate="Password is required"
            >
              <input
                className={styles["input100"]}
                type="password"
                name="retype_password"
                onChange={changeField}
              />
              <span className={styles["focus-input100"]}></span>
            </div>

            <div
              className={
                styles["container-login100-form-btn"] + " " + styles["m-t-17"]
              }
            >
              <button className={styles["login100-form-btn"]} onClick={signUp}>
                Sign Up
              </button>
            </div>

            <div
              className={
                styles["w-full"] +
                " " +
                styles["text-center"] +
                " " +
                styles["p-t-55"]
              }
            >
              <span className={styles["txt2"]}>Have an account?</span>
              <span> </span>
              <Link
                to="/sign-in"
                className={
                  styles["txt2"] +
                  " " +
                  styles["bo1"] +
                  " " +
                  styles["pink-hover"]
                }
              >
                Sign in now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  );
};

export default SignUp;
