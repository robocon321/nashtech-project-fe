import React from "react";
import { Link } from "react-router-dom";

import styles from "@components/client/product-detail/ProductDetail.module.css";

const Index = props => {
    return (
        <div className={styles["tags"]}>
        <span>Tags:</span>
        <Link to="#"> Sport</Link>
        <span>,</span>
        <Link to="#"> Luxury</Link>
      </div>

    )
}

export default Index;