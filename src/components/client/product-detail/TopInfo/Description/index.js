import React, {useContext} from "react";

import styles from "@components/client/product-detail/ProductDetail.module.css";

import {ProductDetailCotnext} from "@providers/client/ProductDetailProvider";

const Index = props => {
    const {productDetailState} = useContext(ProductDetailCotnext);
    return (
        <p className={styles["description"]}>
            {productDetailState.product.description}
        </p>

    )
}

export default Index;