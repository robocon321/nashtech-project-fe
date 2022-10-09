import { Container } from "@mui/material";

import styles from "./OrderHistory.module.css";

const OrderHistory = (props) => {
  return (
    <>
      <Container>
        <div className={styles["order-history"]}>
          <h1>ORDER HISTORY</h1>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Date send</th>
                <th>Date receive</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <a href="#">A2KTS</a>
                </td>
                <td>12/11/2021</td>
                <td>15/11/2021</td>
                <td>Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default OrderHistory;
