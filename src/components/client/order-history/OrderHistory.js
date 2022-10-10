import { Container } from "@mui/material";
import { Link } from 'react-router-dom';

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
                  <Link to="/order-history/1">A2KTS</Link>
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
