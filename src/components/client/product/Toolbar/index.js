import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid3X3GapFill } from "react-icons/bs";

import styles from "@components/client/product/Product.module.css";
import { ProductContext } from "@providers/client/ProductProvider";

const Index = props => {
    const {productState, changeFieldCondition} = useContext(
        ProductContext
    );

    return (
        <div className={styles["toolbar"]}>
            <div className={styles["grid-layout"]}>
                <span onClick={() => props.setLayout(3)}>
                    <BsGrid3X3GapFill/>
                </span>
                <span onClick={() => props.setLayout(4)}>
                    <BsGrid3X3GapFill/>
                </span>
                <span onClick={() => props.setLayout(2)}>
                    <AiOutlineMenu/>
                </span>
            </div>
            <div className={styles["range-product"]}>
                Showing{" "}
                {productState.products.number * productState.products.size}
                {" "} to {" "}
                {productState.products.number * productState.products.size + productState.products.numberOfElements}{" "}
                {" "} of {" "} 
                {productState.products.totalPages}
                {" "}
                pages
            </div>
            <div className={styles["dropdown-option"]}>
                <label>
                    <b>Show:
                    </b>
                </label>
                <select name="size" onChange={changeFieldCondition}>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={30}>30</option>
                </select>
                <label>
                    <b>Sort by:
                    </b>
                </label>
                <select name="sort" onChange={changeFieldCondition}>
                    <option value="createTime__desc">Default</option>
                    <option value="name__asc">Name (A - Z)</option>
                    <option value="name__desc">Name (Z - A)</option>
                    <option value="sellPrice__asc">Price lowest</option>
                    <option value="sellPrice__desc">Price biggest</option>
                </select>
            </div>
        </div>

    )
}

export default Index;