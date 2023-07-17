import Cart from "@components/client/cart/Cart";
import CartProvider from "@providers/client/CartProvider";

const CartPage = (props) => {
  return (
    <main>
      <CartProvider>
        <Cart />
      </CartProvider>
    </main>
  )
}

export default CartPage;