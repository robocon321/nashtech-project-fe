import { Container, Button } from '@mui/material';
import { Helmet } from 'react-helmet';
import {  FaShoppingCart} from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from "./Wishlist.module.css";



const Wishlist = (props) => {
  return (
    <>
      <Helmet>
        <title>My Wishlist History</title>
        <meta name="description" content="My Order History TienDa Store" />
      </Helmet>

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
                <Link to="/product/1">Koss Porta Pro On Ear</Link>
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
                <Link to="#">Koss Porta Pro On Ear</Link>
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
                <Link to="#">Koss Porta Pro On Ear</Link>
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