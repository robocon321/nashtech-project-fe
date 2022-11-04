import { useContext } from "react";
import { Grid, Button, Alert, Switch, Snackbar } from "@mui/material";
import { FaSearch, FaRegEye, FaTrashAlt } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Moment from "react-moment";

import Input from "../../common/Input";
import styles from "./CategoryList.module.css";
import { CategoryAdminContext } from "../../../contexts/providers/admin/CategoryAdminProvider";

const CategoryList = (props) => {
  const {
    categoryAdminState,
    setPage,
    setSort,
    setSelected,
    setSearch,
    changeField,
    resetCategory,
    submitForm,
    setCategory,
    switchVisible,
    deleteCategory,
    resetStatus
  } = useContext(CategoryAdminContext);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 2,
    },
    {
      field: "totalProduct",
      headerName: "Total product",
      minWidth: 100,
      flex: 1.5,
    },
    {
      field: "createTime",
      headerName: "Create time",
      minWidth: 150,
      flex: 1.5,
      renderCell: (params) => {
        return <Moment format="DD/MM/YYYY">{params.row.createTime}</Moment>;
      },
    },
    {
      field: "modTime",
      headerName: "Modify time",
      minWidth: 150,
      flex: 1.5,
      renderCell: (params) => {
        return <Moment format="DD/MM/YYYY">{params.row.modTime}</Moment>;
      },
    },
    {
      field: "status",
      headerName: "Visible",
      minWidth: 150,
      flex: 1.5,
      renderCell: (params) => {
        return <div className={params.row.status ? 'visible' : 'invisible'}>{params.row.status ? 'VISIBLE' : 'INVISIBLE'}</div>;
      },
    },
    {
      headerName: "Action",
      minWidth: 200,
      flex: 2,
      renderCell: (params) => {
        return (
          <div className={styles["btn-row-table"]}>
            <Button variant="contained" color="success" onClick={() => setCategory(params.row.id)}>
              <FaRegEye />
            </Button>
            <span> </span>
            <Button variant="contained" color="error" onClick={() => deleteCategory([params.row.id])}>
              <FaTrashAlt />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={4}>
          <div className={styles["col-category"]}>
            <Input
              id="name"
              type="text"
              name="name"
              title="Category name"
              onChange={changeField}
              value={categoryAdminState.category.name}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="description"
              type="textarea"
              name="description"
              title="Category description"
              onChange={changeField}
              value={categoryAdminState.category.description}
              props={{
                rows: 5,
              }}
              style={{
                marginBottom: 10,
              }}
              required={false}
            />
            <Input
              id="slug"
              type="text"
              name="slug"
              title="Category slug"
              onChange={changeField}
              value={categoryAdminState.category.slug}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-title"
              type="text"
              name="metaTitle"
              title="Meta title"
              onChange={changeField}
              value={categoryAdminState.category.metaTitle}
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-keyword"
              type="text"
              name="metaKeyword"
              title="Meta keyword"
              onChange={changeField}
              value={categoryAdminState.category.metaKeyword}
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <Input
              id="meta-description"
              type="textarea"
              name="metaDescription"
              title="Meta description"
              onChange={changeField}
              value={categoryAdminState.category.metaDescription}
              required={false}
              style={{
                marginBottom: 10,
              }}
            />
            <label>Visible</label>
            <Switch
              checked={categoryAdminState.category.status == 1}
              onChange={() => switchVisible(1 - categoryAdminState.category.status)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <br />
            <Button 
              variant="contained" 
              onClick={() => submitForm()}>SUBMIT</Button>
            <span> </span>
            <Button
              variant="contained"
              color="warning"
              onClick={() => resetCategory()}
            >
              CLEAR
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className={styles["col-category"]}>
            <div className={styles["row-actions"]}>
              <Button variant="contained" className={styles["btn-add"]} onClick={() => setCategory(-1)}>
                <RiAddLine /> NEW CATEGORY
              </Button>
              <div className={styles["search-box"]}>
                <span className={styles["icon-search-box"]}>
                  <FaSearch />
                </span>
                <input
                  className={styles["input-search-box"]}
                  type="text"
                  value={categoryAdminState.conditions.LIKE_name}
                  onChange={setSearch}
                  name="LIKE_name"
                  placeholder="Search categories..."
                />
              </div>
            </div>
            <div className={styles["row-actions"]}>
              <span></span>
              <span className={styles["select-item"]}>
                <b>
                  Select {categoryAdminState.selected.length} items
                  {categoryAdminState.selected.length ? (
                    <span className={styles["action-remove"]} onClick={() => deleteCategory(categoryAdminState.selected)}>Remove</span>
                  ) : (
                    <span></span>
                  )}
                </b>
              </span>
            </div>

            <div style={{ width: "100%" }}>
              {categoryAdminState.categories && (
                <DataGrid
                  rows={categoryAdminState.categories.content}
                  columns={columns}
                  rowCount={categoryAdminState.categories.totalElements}
                  pageSize={categoryAdminState.conditions.size}
                  page={categoryAdminState.categories.number}
                  onPageChange={setPage}
                  paginationMode="server"
                  sortingMode="server"
                  onSortModelChange={setSort}
                  onSelectionModelChange={setSelected}
                  selectionModel={categoryAdminState.selected}
                  autoHeight
                  checkboxSelection
                  disableSelectionOnClick
                  components={{ Toolbar: GridToolbar }}
                  getRowHeight={() => "auto"}
                />
              )}
            </div>
          </div>
        </Grid>
      </Grid>
      <Snackbar open={categoryAdminState.status.message} onClose={resetStatus} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={resetStatus} severity={categoryAdminState.status.success ? "success" : "error"} sx={{ width: '100%' }}>
          {categoryAdminState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CategoryList;
