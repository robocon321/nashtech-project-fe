import { Container, Button } from '@mui/material';
import {  FaShoppingCart} from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import styles from "./Wishlist.module.css";



const Wishlist = (props) => {
  return (
    <>
      <Container>
        <h1>My Wish List</h1>
        <table className={styles["table-wishlist"]}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Model</th>
              <th>Stock</th>
              <th>Unit Price</th>
              <th>Action</th>
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
              <td>In stock</td>
              <td>$80.00</td>
              <td>
              <Button variant="contained">
                <FaShoppingCart />
              </Button>
              <Button variant="contained" color="error">
                <MdDelete />
              </Button>
              </td>
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
              <td>In stock</td>
              <td>$80.00</td>
              <td>
              <Button variant="contained">
                <FaShoppingCart />
              </Button>
              <Button variant="contained" color="error">
                <MdDelete />
              </Button>
              </td>
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
              <td>In stock</td>
              <td>$80.00</td>
              <td>
              <Button variant="contained">
                <FaShoppingCart />
              </Button>
              <Button variant="contained" color="error">
                <MdDelete />
              </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  )
}

export default Wishlist;