import { Container, Button, Grid, Snackbar, Alert } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./Cart.module.css";
import Input from "./../../common/Input";
import { useContext } from "react";
import { CartContext } from "../../../contexts/providers/client/CartProvider";
import { Helmet } from "react-helmet";
import { ClientLayoutContext } from "../../../contexts/providers/client/ClientLayoutProvider";

const Cart = (props) => {
  const {
    cartState,
    clientState,
    updateCartItem,
    deleteCartItem,
    changeAddressShipping,
    resetStatus
  } = useContext(CartContext);
  const { changeLang, t, lang } =
  useContext(ClientLayoutContext);


  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const subTotal = clientState.cart.cartItems
    ? clientState.cart.cartItems.reduce((previousValue, currentValue) => {
        return (
          previousValue + currentValue.quantity * currentValue.product.sellPrice
        );
      }, 0)
    : 0;

  return (
    <>
      <Helmet>
        <title>{t('cart')}</title>
        <meta name="description" content="My Cart TienDa Store" />
      </Helmet>
      <Container>
        <h1>My Cart</h1>
        <table className={styles["table-cart"]}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clientState.cart.cartItems &&
              clientState.cart.cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="flex-center">
                    <div className={styles["image-row"]}>
                      <img src={item.product.thumbnail} alt="Not found" />
                    </div>
                  </td>
                  <td>
                    <Link to={"/product/" + item.product.slug}>
                      {item.product.name}
                    </Link>
                  </td>
                  <td>{formatter.format(item.product.sellPrice)}</td>
                  <td>
                    <div className={styles["quantity-cart"]}>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartItem({ ...item, quantity: e.target.value })
                        }
                      />
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() =>
                          updateCartItem({
                            ...item,
                            quantity: parseInt(item.quantity) + 1,
                          })
                        }
                      >
                        <FaPlus />
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() =>
                          updateCartItem({
                            ...item,
                            quantity: parseInt(item.quantity) - 1,
                          })
                        }
                      >
                        <RiSubtractFill />
                      </Button>
                    </div>
                  </td>
                  <td>
                    {formatter.format(item.product.sellPrice * item.quantity)}
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteCartItem([item.id])}
                    >
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
      <Container>
        <div className={styles["total-price"]}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles["cart-summary"]}>
                <h3>Cart Summary</h3>
                <div className={styles["row-cart-summary"]}>
                  <span>Sub Total</span>
                  <span>{formatter.format(subTotal)}</span>
                </div>
                <div className={styles["row-cart-summary"]}>
                  <span>Shipping Cost</span>
                  <span>{formatter.format(cartState.ship)}</span>
                </div>
                <hr />
                <div className={styles["row-cart-summary"]}>
                  <span>
                    <b>Total Cost</b>
                  </span>
                  <span>
                    <b>{formatter.format(subTotal + cartState.ship)}</b>
                  </span>
                </div>
              </div>
              <div className={styles["btn-cart-summary"]}>
                <Button variant="contained">Checkout</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Snackbar
        open={cartState.status.message}
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
