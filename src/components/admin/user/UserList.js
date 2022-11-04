import { Alert, Button, Snackbar } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { FaSearch, FaRegEye, FaTrashAlt } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";
import { UserAdminContext } from "../../../contexts/providers/admin/UserAdminProvider";

import styles from "./UserList.module.css";

const UserList = (props) => {
  const {
    userState,
    setSort,
    setSelected,
    setSearch,
    resetStatus,
    deleteUser,
    setPage,
    navigate
  } = useContext(UserAdminContext);

  const columns = [
    {
      field: "username",
      headerName: "Username",
      minWidth: 100,
      flex: 2,
    },
    {
      field: "fullname",
      headerName: "Full name",
      minWidth: 150,
      flex: 1.5,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      minWidth: 150,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className={styles["image-row-table"]}>
            <img src={params.value} alt="Not found" />
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Visible",
      minWidth: 150,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div
            className={
              params.row.status === 1 ? "visible" : "invisible"
            }
          >
            {params.row.status === 1 ? 'VISIBLE' : 'INVISIBLE'}
          </div>
        );
      },
    },
    {
      field: "id",
      headerName: "Action",
      minWidth: 200,
      flex: 2,
      renderCell: (params) => {
        return (
          <div className={styles["btn-row-table"]}>
              <Button variant="contained" color="success" onClick={() => navigate(`/admin/users/${params.row.id}`)}>
                <FaRegEye />
              </Button>
              <span> </span>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteUser([params.row.id])}
              >
                <FaTrashAlt />
              </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className={styles["row-actions"]}>
        <Button variant="contained" className={styles["btn-add"]}>
          <RiAddLine /> NEW USER
        </Button>
        <div className={styles["search-box"]}>
          <span className={styles["icon-search-box"]}>
            <FaSearch />
          </span>
          <input
            name="LIKE_username"
            onChange={setSearch}
            className={styles["input-search-box"]}
            type="text"
            placeholder="Search users..."
          />
        </div>
      </div>
      <div className={styles["row-actions"]}>
        <span></span>
        <span className={styles["select-item"]}>
          <b>
            Select {userState.selected.length} items
            {userState.selected.length ? (
              <span
                className={styles["action-remove"]}
                onClick={() => deleteUser(userState.selected)}
              >
                Remove
              </span>
            ) : (
              <span></span>
            )}
          </b>
        </span>
      </div>
      <div style={{ width: "100%" }}>
        {userState.users && (
          <DataGrid
            rows={userState.users.content}
            columns={columns}
            rowCount={userState.users.totalElements}
            pageSize={userState.conditions.size}
            page={userState.users.number}
            onPageChange={setPage}
            paginationMode="server"
            sortingMode="server"
            onSortModelChange={setSort}
            onSelectionModelChange={setSelected}
            selectionModel={userState.selected}
            autoHeight
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            getRowHeight={() => "auto"}
          />
        )}
      </div>
      <Snackbar
        open={userState.status.message}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={userState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {userState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UserList;
