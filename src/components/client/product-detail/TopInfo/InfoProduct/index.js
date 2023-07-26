import React, {useContext} from "react";
import {Link} from "react-router-dom";

import styles from "@components/client/product-detail/ProductDetail.module.css";

import {ProductDetailCotnext} from "@providers/client/ProductDetailProvider";

const Index = props => {
    const {productDetailState} = useContext(ProductDetailCotnext);
    return (
        <div className={styles["info-product"]}>
            <ul>
                <li>Ex Tax: $80.00</li>
                <li>
                    Category{" "}
                    {
                        productDetailState.product.categories && productDetailState
                            .product
                            .categories
                            .map((item, index) => (
                                <Link key={item.id} to="#">
                                    {
                                        item.name + (
                                            productDetailState.product.categories.length - 1 === index
                                                ? ""
                                                : ", "
                                        )
                                    }
                                </Link>
                            ))
                    }
                </li>
                <li>
                    Product Code:
                    <b>Product {productDetailState.product.id}</b>
                </li>
                <li>
                    Stock:
                    <b>{productDetailState.product.stock}</b>
                </li>
            </ul>
        </div>

    )
}

export default Index;