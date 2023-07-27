import { Alert, Grid, Snackbar } from "@mui/material";
import { useContext } from "react";

import FilterProduct from "@components/admin/product/FilterProduct/index";
import ProductList from "@components/admin/product/ProductList/index";

import { ProductAdminContext } from "@providers/admin/ProductAdminProvider";
import { Helmet } from "react-helmet";

const ManageProductList = (props) => {
  const {
    productAdminState,
    resetStatus,
  } = useContext(ProductAdminContext);


  return (
    <>
      <Helmet>
        <title>List Product</title>
        <meta name="description" content="List Product TienDa Store" />
      </Helmet>
      <Grid container spacing={4}>
        <FilterProduct />
        <ProductList />
      </Grid>
      <Snackbar
        open={productAdminState.status.message !== ''}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={productAdminState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {productAdminState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ManageProductList;
