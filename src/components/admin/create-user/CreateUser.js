import { Grid, Button, Alert, Snackbar } from "@mui/material";

import styles from "./CreateUser.module.css";
import Input from "../../common/Input";
import { useContext } from "react";
import { NewUserAdminContext } from "../../../contexts/providers/admin/NewUserAdminProvider";
import { Helmet } from "react-helmet";

const CreateUser = (props) => {
  const { newUserState, changeField, clearAllField, resetStatus, submit } =
    useContext(NewUserAdminContext);

  return (
    <>
      <Helmet>
        <title>Create User</title>
        <meta name="description" content="Create User TienDa Store" />
      </Helmet>
      <div className={styles["wrap-field"]}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="username"
            type="text"
            title="Username"
            name="username"
            placeholder="Please enter Username"
            onChange={changeField}
            value={newUserState.user.username}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="password"
            type="password"
            title="Password"
            name="password"
            placeholder="Please enter password"
            onChange={changeField}
            value={newUserState.user.password}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="fullname"
            type="text"
            title="Fullname"
            name="fullname"
            placeholder="Please enter fullname"
            onChange={changeField}
            value={newUserState.user.fullname}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="phone"
            type="text"
            title="Phone"
            name="phone"
            placeholder="Please enter phone"
            onChange={changeField}
            value={newUserState.user.phone}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="email"
            type="text"
            title="Email"
            name="email"
            placeholder="Please enter email"
            onChange={changeField}
            value={newUserState.user.email}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="avatar"
            type="file"
            title="Avatar"
            name="avatar"
            required={false}
            placeholder="Please choose image"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="birthday"
            type="date"
            title="Birthday"
            name="birthday"
            required={false}
            placeholder="Please choose birthday"
            onChange={changeField}
            value={newUserState.user.birthday}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Input
            id="sex"
            type="radio"
            title="Sex"
            name="sex"
            required={false}
            props={{
              data: [
                {
                  name: "Male",
                  value: 0,
                },
                {
                  name: "Female",
                  value: 1,
                },
              ],
              key: "name",
              value: "value",
            }}
            onChange={changeField}
            value={0}
          />
        </Grid>
      </Grid>
      <div className={styles["wrap-btn"]}>
        <Button variant="contained" onClick={submit}>SUBMIT</Button>
        <span> </span>
        <Button
          variant="contained"
          color="error"
          onClick={() => clearAllField()}
        >
          CLEAR
        </Button>
      </div>
      <Snackbar
        open={newUserState.status.message}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={newUserState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {newUserState.status.message}
        </Alert>
      </Snackbar>
    </div>

    </>
  );
};

export default CreateUser;
