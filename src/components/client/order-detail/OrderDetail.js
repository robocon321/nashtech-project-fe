import { Container } from '@mui/material';

import styles from './OrderDetail.module.css';

const OrderDetail = (props) => {
  return (
    <>
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
                <a href="#">Koss Porta Pro On Ear</a>
              </td>
              <td>
                Product 12
              </td>
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
                <a href="#">Koss Porta Pro On Ear</a>
              </td>
              <td>
                Product 12
              </td>
              <td>10</td>
              <td>$80.00</td>
              <td>$800.00</td>
            </tr>
          </tbody>
        </table>
      </Container>

    </>
  )
}

export default OrderDetail;