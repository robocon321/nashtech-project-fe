import { Grid, Button, Alert, Snackbar, Switch } from "@mui/material";

import styles from "./UpdateUser.module.css";
import Input from "@components/common/Input";
import { useContext } from "react";
import { UpdateUserAdminContext } from "@providers/admin/UpdateUserAdminProvider";
import { Helmet } from "react-helmet";

const UpdateUser = (props) => {
  const {
    updateUserState,
    changeField,
    clearAllField,
    resetStatus,
    submit,
    switchVisible,
  } = useContext(UpdateUserAdminContext);

  return (
    <>
      <Helmet>
        <title>Update User</title>
        <meta name="description" content="Update User TienDa Store" />
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
            value={updateUserState.user.username}
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
            value={updateUserState.user.password}
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
            value={updateUserState.user.fullname}
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
            value={updateUserState.user.phone}
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
            value={updateUserState.user.email}
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
            value={updateUserState.user.birthday}
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
                  value: 1,
                },
                {
                  name: "Female",
                  value: 0,
                },
              ],
              key: "name",
              value: "value",
            }}
            onChange={changeField}
            value={updateUserState.user.sex == true ? 1 : 0}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <label>Visible</label>
          <Switch
            checked={updateUserState.user.status === 1}
            onChange={() =>
              switchVisible(1 - updateUserState.user.status)
            }
            inputProps={{ "aria-label": "controlled" }}
          />
        </Grid>
      </Grid>
      <div className={styles["wrap-btn"]}>
        <Button variant="contained" onClick={submit}>
          SUBMIT
        </Button>
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
        open={updateUserState.status.message != ''}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={updateUserState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {updateUserState.status.message}
        </Alert>
      </Snackbar>
    </div>

    </>
  );
};

export default UpdateUser;
