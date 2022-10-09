import { Container, Button, Grid } from '@mui/material';
import {  FaPlus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { RiSubtractFill } from 'react-icons/ri';

import styles from "./Cart.module.css";
import Input from './../../common/Input';

const Cart = (props) => {
  return (
    <>
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
            <tr>
              <td>
                <div className={styles["image-row"]}>
                  <img src="/images/wishlist-1.jpg" alt="Not found" />                  
                </div>
              </td>
              <td>
                <a href="#">Koss Porta Pro On Ear</a>
              </td>
              <td>$80.00</td>
              <td>
                <div className={styles['quantity-cart']}>
                  <input type='number' min={1} /> 
                  <Button variant="contained" color='success'>
                    <FaPlus />
                  </Button>
                  <Button variant="contained" color='warning'>
                    <RiSubtractFill />
                  </Button>
                </div>
              </td>
              <td>$80.00</td>
              <td>
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
              <td>$80.00</td>
              <td>
                <div className={styles['quantity-cart']}>
                  <input type='number' min={1} /> 
                  <Button variant="contained" color='success'>
                    <FaPlus />
                  </Button>
                  <Button variant="contained" color='warning'>
                    <RiSubtractFill />
                  </Button>
                </div>
              </td>
              <td>$80.00</td>
              <td>
              <Button variant="contained" color="error">
                <MdDelete />
              </Button>
              </td>
            </tr>

          </tbody>
        </table>
      </Container>
      <Container>
        <div className={styles['total-price']}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <div className={styles['address-shipping']}>
                <h2>Address Shipping</h2>
                <Input type='radio' props={{
                  data: [
                    {
                      label: 'số nhà 74, ấp Thới Hòa, xã Thới Sơn, TP.Mỹ Tho, tỉnh Tiền Giang',
                      value: 'diachi1'
                    },
                    {
                      label: 'số nhà 75, phường Đông Hòa, thị xã Dĩ An, tỉnh Bình Dương',
                      value: 'diachi2'
                    }
                  ]
                }} />
                <div className={styles['new-address']}>
                  <a href="#">Add new address</a>
                </div>
                <h2>Discount Coupon Code</h2>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Input type='text' placeholder='Enter your coupon code' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                  <Button variant="contained">APPLY CODE</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles['cart-summary']}>
                <h3>Cart Summary</h3>
                <div className={styles['row-cart-summary']}>
                  <span>Sub Total</span>
                  <span>$1250.00</span>
                </div>
                <div className={styles['row-cart-summary']}>
                  <span>Shipping Cost</span>
                  <span>$0.00</span>
                </div>
                <hr />
                <div className={styles['row-cart-summary']}>
                  <span><b>Shipping Cost</b></span>
                  <span><b>$0.00</b></span>
                </div>                
              </div>
              <div className={styles['btn-cart-summary']}>
                <Button variant="contained">Checkout</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  )
}

export default Cart;