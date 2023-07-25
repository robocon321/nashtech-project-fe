import ProductCard from "@components/common/ProductCard";
import { Grid } from "@mui/material";
import React, { useContext } from "react";

import { ProductContext } from "@providers/client/ProductProvider";
import styles from "@components/client/product/Product.module.css";

const Index = (props) => {
  const {
    productState,
  } = useContext(ProductContext);
    return (
        <div className={styles["products"]}>
        <Grid container spacing={3}>
          {productState.products.content &&
            productState.products.content.map((item) => (
              <Grid item md={12 / props.layout} key={item.id}>
                <ProductCard item={item} />
              </Grid>
            ))}
        </Grid>
      </div>
    )
}

export default Index;