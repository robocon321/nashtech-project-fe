import { Slider } from "@mui/material";
import React, { useContext, useState } from "react";

import { ProductContext } from "@providers/client/ProductProvider";
import styles from "@components/client/product/Product.module.css";


const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const Index = props => {
    const {
        setField,
      } = useContext(ProductContext);    
    
      const [value, setValue] = useState([10000, 10000000]);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleMouseUp = (e) => {
        setField({field: "BT_sellPrice", value: `${value[0]},${value[1]}`});
      };
    
    return (
        <div className={styles["navigation"]}>
        <h3>Layered Navigation</h3>
        <div className={styles["name-filter"]}>
          <h4>Filter By Price</h4>
          <hr />
          <div className={styles["filter-price"]}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              min={10000}
              max={10000000}
              onChange={handleChange}
              onMouseUp={handleMouseUp}
              valueLabelDisplay="auto"
            />
            <div className={styles["price-filter"]}>
              <span className={styles["from-price-filter"]}>
                {formatter.format(value[0])}
              </span>
              <span>-</span>
              <span className={styles["to-price-filter"]}>
                {formatter.format(value[1])}
              </span>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Index;