import React from "react";

import Input from "@components/common/Input";
import styles from "@components/client/product/Product.module.css";
import { useContext } from "react";
import { ProductContext } from "@providers/client/ProductProvider";

const Index = props => {
    const {
        changeCategory,
        categories,
      } = useContext(ProductContext);
    
    return (
        <div className={styles["categories"]}>
        <h3>Categories</h3>
        <div className={styles["name-filter"]}>
          <Input
            type="checkbox"
            name="product"
            style={{
              margin: "10px 0px",
            }}
            props={{
              data: categories,
              key: "name",
              value: "id",
            }}
            onChange={(e) => changeCategory()}
          />
        </div>
      </div>

    )
}

export default Index;