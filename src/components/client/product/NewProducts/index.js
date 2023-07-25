import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ProductContext } from "@providers/client/ProductProvider";
import styles from "@components/client/product/Product.module.css";


const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const Index = props => {
    const {
        productState
      } = useContext(ProductContext);
    
    return (
        <div className={styles["new-products"]}>
        <h2>POPULAR PRODUCTS</h2>
        {productState.popular_products.content && productState.popular_products.content.map((item) => (
          <div className={styles["new-product"]} key={item.id}>
            <div className={styles["image-new-product"]}>
              <img src={item.thumbnail} alt="Not found" />
            </div>
            <div className={styles["info-new-product"]}>
              <div className={styles["stars"]}>
                <span
                  className={item.rating > 0 ? styles["star"] + " " + styles["active"] : styles["star"]}
                >
                  <FaStar />
                </span>
                <span className={item.rating > 1 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                  <FaStar />
                </span>
                <span className={item.rating > 2 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                  <FaStar />
                </span>
                <span className={item.rating > 3 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                  <FaStar />
                </span>
                <span className={item.rating > 4 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                  <FaStar />
                </span>
              </div>
              <Link to={item.slug}>
                <b>{item.name}</b>
              </Link>
              <div className={styles["price-new-product"]}>
                {formatter.format(item.sellPrice)}
              </div>
            </div>
          </div>
        ))}
      </div>

    )
}

export default Index;