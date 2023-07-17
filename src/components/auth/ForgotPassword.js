import styles from "./Auth.module.css";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { Alert } from "@mui/material";

import { ForgotPasswordContext } from "@providers/auth/ForgotPasswordProvider";
import Loading from "@components/common/Loading";

const ForgotPassword = (props) => {
  const { forgotPassState, setEmail, submit } = useContext(
    ForgotPasswordContext
  );
  return (
    <>
      <Helmet>
        <title>Forgot password</title>
        <meta name="description" content="Sign In TienDa Store" />
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
            {forgotPassState.status.isLoading ? (
              <Loading />
            ) : (
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
                  className={
                    styles["login100-form-title"] + " " + styles["p-b-53"]
                  }
                >
                  Enter your email
                </span>
                <div className="alert">
                  {forgotPassState.status.message && (
                    <Alert
                      severity={
                        forgotPassState.status.success ? "success" : "warning"
                      }
                    >
                      {forgotPassState.status.message}
                    </Alert>
                  )}
                </div>
                <div
                  className={
                    styles["wrap-input100"] + " " + styles["validate-input"]
                  }
                  data-validate="Email is required"
                >
                  <input
                    className={styles["input100"]}
                    type="text"
                    name="email"
                    value={forgotPassState.email}
                    onChange={setEmail}
                  />
                  <span className={styles["focus-input100"]}></span>
                </div>
                <div
                  className={
                    styles["container-login100-form-btn"] +
                    " " +
                    styles["m-t-17"]
                  }
                >
                  <button
                    className={styles["login100-form-btn"]}
                    onClick={submit}
                  >
                    Reset password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
