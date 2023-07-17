import { Container } from "@mui/material";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";

import styles from "./OrderDetail.module.css";

const OrderDetail = (props) => {
  const { changeLang, t, lang } =
  useContext(ClientLayoutContext);

  return (
    <>
      <Helmet>
        <title>{t('my_order')}</title>
        <meta name="description" content="My Order TienDa Store" />
      </Helmet>
      <Container>
        <h1>My Order Detail</h1>
        <table className={styles["table-order-detail"]}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Model</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles["image-row"]}>
                  <img src="/images/wishlist-1.jpg" alt="Not found" />
                </div>
              </td>
              <td>
                <Link to="/product/1">Koss Porta Pro On Ear</Link>
              </td>
              <td>Product 12</td>
              <td>10</td>
              <td>$80.00</td>
              <td>$800.00</td>
            </tr>
            <tr>
              <td>
                <div className={styles["image-row"]}>
                  <img src="/images/wishlist-1.jpg" alt="Not found" />
                </div>
              </td>
              <td>
                <Link to="/product/1">Koss Porta Pro On Ear</Link>
              </td>
              <td>Product 12</td>
              <td>10</td>
              <td>$80.00</td>
              <td>$800.00</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default OrderDetail;
