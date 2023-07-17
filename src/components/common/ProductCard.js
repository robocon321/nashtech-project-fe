import { useContext } from "react";
import { FaShoppingCart, FaRegHeart, FaStar, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import styles from './ProductCard.module.css';

const ProductCard = ({ item }) => {
  const { saveCartItem, deleteCartItem, clientState } = useContext(ClientLayoutContext);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  
  const stars = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= item.rating) {
      stars.push(
        <span className={styles["star"] + " " + styles["active"]} key={i}>
          <FaStar />
        </span>
      );
    } else {
      stars.push(
        <span className={styles["star"]} key={i}>
          <FaStar />
        </span>
      );
    }
  }

  const checkSelectedCart = () => {
    if(!clientState.cart.cartItems) return null;
    else return clientState.cart.cartItems.find(i => i.product.id == item.id);
  }

  const selectedCartItem = checkSelectedCart();

  return (
    <div className={styles["product"]}>
      <div className={styles["top-product"]}>
        <img src={item.thumbnail} alt="Not found" />
        {/* <div className={"flex-center " + styles["counter-product"]}>
          <span>615 : 10 : 31 : 38</span>
        </div> */}
        <div className={styles["discount-product"]}>
          -
          {Math.ceil(
            ((item.realPrice - item.sellPrice) * 100) / item.realPrice
          )}
          %
        </div>
      </div>
      <div className={styles["bottom-product"]}>
        <div className={styles["stars"]}>{stars.map((item) => item)}</div>
        <div className={styles["title-product"]}>
          <Link to={`/product/${item.slug}`}>{item.name}</Link>
        </div>
        <div className={styles["price-product"]}>
          <span className={styles["discount-price-product"]}>
            {formatter.format(item.sellPrice)}
          </span>
          <span className={styles["real-price-product"]}>
            {formatter.format(item.realPrice)}
          </span>
        </div>
        <div className={styles["action-links"]}>
            {
              selectedCartItem ? (
                <span onClick={() => deleteCartItem([selectedCartItem.id])} className={"flex-center " + styles["action-link"] + " " + styles["active"]}>
                  <FaShoppingCart />
                </span>
              ) : (
                <span onClick={() => saveCartItem({
                  quantity: 1,
                  productId: item.id
                })} className={"flex-center " + styles["action-link"]}>
                  <FaShoppingCart />
                </span>
              )
            }
          <span className={"flex-center " + styles["action-link"]}>
            <FaRegHeart />
          </span>
          <span className={"flex-center " + styles["action-link"]}>
            <FaRegEye />
          </span>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;