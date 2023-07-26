import styles from "@components/client/cart/Cart.module.css";
import {CartContext} from "@providers/client/CartProvider";
import {useContext} from "react";

const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
});

const Index = props => {
    const {cartState, clientState} = useContext(CartContext);

    const subTotal = clientState.cart.cartItems
        ? clientState
            .cart
            .cartItems
            .reduce((previousValue, currentValue) => {
                return (previousValue + currentValue.quantity * currentValue.product.sellPrice);
            }, 0)
        : 0;

    return (
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
            <hr/>
            <div className={styles["row-cart-summary"]}>
                <span>
                    <b>Total Cost</b>
                </span>
                <span>
                    <b>{formatter.format(subTotal + cartState.ship)}</b>
                </span>
            </div>
        </div>

    )
}

export default Index;