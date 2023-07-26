import { Button, Container } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { CartContext } from "@providers/client/CartProvider";
import { useContext } from "react";
import styles from "@components/client/cart/Cart.module.css";

const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

const Index = props => {
    const {
        clientState,
        updateCartItem,
        deleteCartItem,
      } = useContext(CartContext);
      
    return (
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
        
    )
}

export default Index;