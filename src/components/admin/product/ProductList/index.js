import { Button, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { FaRegEye, FaSearch, FaTrashAlt } from "react-icons/fa";
import { RiAddLine } from "react-icons/ri";

import styles from "@components/admin/product/ManageProductList.module.css";

import { ProductAdminContext } from "@providers/admin/ProductAdminProvider";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const Index = props => {
    const {
        productAdminState,
        navigate,
        setPage,
        setSort,
        setSelected,
        setSearch,
        deleteProduct,
      } = useContext(ProductAdminContext);

      const columns = [
        {
          field: "name",
          headerName: "Product",
          minWidth: 150,
          flex: 1.5,
        },
        {
          field: "thumbnail",
          headerName: "Thumbnail",
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            return (
              <div className={styles["image-row-table"]}>
                <img src={params.value} alt="Not found" />
              </div>
            );
          },
        },
        {
          field: "stock",
          headerName: "Stock",
          minWidth: 50,
          flex: 0.5,
        },
        {
          field: "realPrice",
          headerName: "Real price",
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            return formatter.format(params.value);
          },
        },
        {
          field: "sellPrice",
          headerName: "Sell price",
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            return formatter.format(params.value);
          },
        },
        {
          field: "rating",
          headerName: "Rating",
          minWidth: 50,
          flex: 0.5,
          renderCell: (params) => Math.round(params.row.rating * 10) / 10,
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
                  params.row.status ? "visible" : "invisible"
                }
              >
                {params.row.status ? 'VISIBLE' : 'INVISIBLE'}
              </div>
            );
          },
        },
        {
          headerName: "Action",
          minWidth: 100,
          flex: 1,
          renderCell: (params) => {
            return (
              <div className={styles["btn-row-table"]}>
                <Button variant="contained" color="success" onClick={() => navigate(`/admin/products/${params.row.slug}`)}>
                  <FaRegEye />
                </Button>
                <span> </span>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteProduct([params.row.id])}
                >
                  <FaTrashAlt />
                </Button>
              </div>
            );
          },
        },
    ];
    
    return (
        <Grid item xs={12} lg={8}>
          <div className={styles["table"]}>
            <div className={styles["row-actions"]}>
              <Button variant="contained" className={styles["btn-add"]} onClick={() => navigate('/admin/products/create')}>
                <RiAddLine /> NEW PRODUCT
              </Button>
              <div className={styles["search-box"]}>
                <span className={styles["icon-search-box"]}>
                  <FaSearch />
                </span>
                <input
                  className={styles["input-search-box"]}
                  type="text"
                  placeholder="Search products..."
                  value={productAdminState.conditions.LIKE_name}
                  onChange={setSearch}
                  name="LIKE_name"
                />
              </div>
            </div>
            <div className={styles["row-actions"]}>
              <span></span>
              <span className={styles["select-item"]}>
                <b>
                  Select {productAdminState.selected.length} items
                  {productAdminState.selected.length ? (
                    <span
                      className={styles["action-remove"]}
                      onClick={() => deleteProduct(productAdminState.selected)}
                    >
                      Remove
                    </span>
                  ) : (
                    <span></span>
                  )}
                </b>
              </span>{" "}
            </div>
            <div style={{ width: "100%" }}>
              {productAdminState.products && (
                <DataGrid
                  rows={productAdminState.products.content}
                  columns={columns}
                  rowCount={productAdminState.products.totalElements}
                  pageSize={productAdminState.conditions.size}
                  page={productAdminState.products.number}
                  onPageChange={setPage}
                  paginationMode="server"
                  sortingMode="server"
                  onSortModelChange={setSort}
                  onSelectionModelChange={setSelected}
                  selectionModel={productAdminState.selected}
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