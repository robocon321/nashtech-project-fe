import { Alert, Button, Container, Grid, Snackbar } from "@mui/material";

import CartSummary from "@components/client/cart/CartSummary/index";
import AddressShipping from "@components/client/cart/AddressShipping/index";
import styles from "@components/client/cart/Cart.module.css";
import TableCart from "@components/client/cart/TableCart/index";
import { CartContext } from "@providers/client/CartProvider";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import { useContext } from "react";
import { Helmet } from "react-helmet";

const Cart = (props) => {
  const {
    cartState,
    resetStatus
  } = useContext(CartContext);
  const { t } =
  useContext(ClientLayoutContext);

  return (
    <>
      <Helmet>
        <title>{t('cart')}</title>
        <meta name="description" content="My Cart TienDa Store" />
      </Helmet>
      <TableCart />
      <Container>
        <div className={styles["total-price"]}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AddressShipping />
            </Grid>
            <Grid item xs={12} md={6}>
              <CartSummary />
              <div className={styles["btn-cart-summary"]}>
                <Button variant="contained">Checkout</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Snackbar
        open={cartState.status.message !== ''}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={cartState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {cartState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Cart;
