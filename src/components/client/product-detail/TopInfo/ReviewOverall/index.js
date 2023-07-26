import {
    Rating
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";


import styles from "@components/client/product-detail/ProductDetail.module.css";

import { ProductDetailCotnext } from "@providers/client/ProductDetailProvider";


const Index = props => {
    const {
        productDetailState,
      } = useContext(ProductDetailCotnext);

    return (
        <div className={styles["review-overall"]}>
        <span className={styles["rating"]}>
          <Rating
            name="read-only"
            value={Math.ceil(productDetailState.product.rating)}
            readOnly
          />
        </span>
        <span className={styles["link-review-overall"]}>
          <Link to="#">
            {productDetailState.ratings.totalElements} Reviews
          </Link>
        </span>
        <span> | </span>
        <span className={styles["write-review-overall"]}>
          <Link to="#review">Write A Review</Link>
        </span>
      </div>

    )
}

export default Index;