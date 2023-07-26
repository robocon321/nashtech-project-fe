import React from "react";

import styles from "@components/client/product-detail/ProductDetail.module.css";

const Index = props => {
    return (
        <div className={styles["banners"]}>
        <div className={styles["banner"]}>
          <img
            src="/images/product-detail-banner-1.jpg"
            alt="Not found"
          />
        </div>
        <div className={styles["banner"]}>
          <img
            src="/images/product-detail-banner-2.jpg"
            alt="Not found"
          />
        </div>
      </div>

    )
}

export default Index;