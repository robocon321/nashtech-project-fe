import { Button, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { FaRegEye, FaSearch, FaTrashAlt } from "react-icons/fa";
import Moment from "react-moment";

import styles from "@components/admin/category/ManageCategoryList.module.css";

import { CategoryAdminContext } from "@providers/admin/CategoryAdminProvider";

const Index = (props) => {
  const {
    categoryAdminState,
    setPage,
    setSort,
    setSelected,
    setSearch,
    setCategory,
    deleteCategory,
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
      field: "action",
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
        <Grid item xs={12} lg={8}>
          <div className={styles["col-category"]}>
            <div className={styles["row-actions"]}>
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

    )
}

export default Index;