import { Alert, Grid, Snackbar } from "@mui/material";
import { useContext } from "react";

import CategoryList from "@components/admin/category/CategoryList/index";
import FilterInput from "@components/admin/category/FilterInput/index";

import { CategoryAdminContext } from "@providers/admin/CategoryAdminProvider";
import { Helmet } from "react-helmet";

const ManageCategoryList = (props) => {
  const {
    categoryAdminState,
    resetStatus
  } = useContext(CategoryAdminContext);


  return (
    <>
      <Helmet>
        <title>List category</title>
        <meta name="description" content="List Category TienDa Store" />
      </Helmet>    
      <Grid container spacing={4}>
        <FilterInput />
        <CategoryList />
      </Grid>
      <Snackbar open={categoryAdminState.status.message !== ''} onClose={resetStatus} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={resetStatus} severity={categoryAdminState.status.success ? "success" : "error"} sx={{ width: '100%' }}>
          {categoryAdminState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ManageCategoryList;
