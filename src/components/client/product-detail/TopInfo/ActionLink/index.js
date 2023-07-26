import React, { useContext } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";


import styles from "@components/client/product-detail/ProductDetail.module.css";


import { ProductDetailCotnext } from "@providers/client/ProductDetailProvider";

const Index = props => {
    const {
        productDetailState,
      } = useContext(ProductDetailCotnext);
    return (
        <div className={styles["action-links-product"]}>
        <label>Qty</label>
        <input
          type="number"
          min={0}
          max={productDetailState.product.stock}
          id="quantity"
          name="quantity"
        />
        <button className={styles["btn-cart"]}>
          <FaShoppingCart /> Add To Cart
        </button>
        <button
          className={styles["btn-wishlist"] + " " + "flex-center"}
        >
          <FaRegHeart />{" "}
        </button>
      </div>

    )
}

export default Index;