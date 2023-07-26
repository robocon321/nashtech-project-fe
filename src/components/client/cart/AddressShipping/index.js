import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "@components/client/cart/Cart.module.css";
import Input from "@components/common/Input";
import { CartContext } from "@providers/client/CartProvider";
import { useContext } from "react";

const Index = props => {
    const {
        cartState,
        changeAddressShipping,
      } = useContext(CartContext);
    
    return (
        <div className={styles["address-shipping"]}>
        <h2>Address Shipping</h2>
        <Input
          type="radio"
          name="address"
          onChange={(e) => changeAddressShipping(e)}
          props={{
            data: cartState.contacts,
            key: "detailAddress",
            value: "id",
          }}
        />
        <div className={styles["new-address"]}>
          <Link to="/address">Add new address</Link>
        </div>
        <h2>Discount Coupon Code</h2>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Input type="text" placeholder="Enter your coupon code" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained">APPLY CODE</Button>
          </Grid>
        </Grid>
      </div>

    )
}

export default Index;