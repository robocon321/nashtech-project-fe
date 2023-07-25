import { Pagination } from "@mui/material";
import React, { useContext } from "react";

import { ProductContext } from "@providers/client/ProductProvider";
import styles from "@components/client/product/Product.module.css";

const Index = (props) => {
  const {
    productState,
    changePageCondition,
  } = useContext(ProductContext);

    return (
        <div className={styles["pagination"]}>
        {productState.products.content && (
          <Pagination
            count={productState.products.totalPages}
            page={productState.products.number + 1}
            onChange={changePageCondition}
            size="large"
          />
        )}
      </div>

    )
}

export default Index;