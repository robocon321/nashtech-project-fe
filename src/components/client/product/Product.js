import React, { useState } from "react";
import { Container, Slider, Pagination } from '@mui/material';
import { Grid } from '@mui/material';
import styles from './Product.module.css';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaShippingFast, FaDropbox, FaRegCalendar, FaStar, FaRegEye, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { TiMessages }  from 'react-icons/ti';

const Product = (item) => {
  return (
    <div className={styles["product"]}>
      <div className={styles["top-product"]}>
        <img src="images/product_1.jpg" alt="Not found" />
        <div className={styles["discount-product"]}>-2%</div>
      </div>
      <div className={styles["bottom-product"]}>
        <div className={styles["stars"]}>
          <span className={styles["star"] + " " + styles["active"]}><FaStar /></span>
          <span className={styles["star"]}><FaStar /></span>
          <span className={styles["star"]}><FaStar /></span>
          <span className={styles["star"]}><FaStar /></span>
          <span className={styles["star"]}><FaStar /></span>
        </div>
        <div className={styles["title-product"]}>
          <a href="#">Sony XB10 Portable Wireless</a>
        </div>
        <div className={styles["price-product"]}>
          <span className={styles["discount-price-product"]}>$104.00</span>
          <span className={styles["real-price-product"]}>
            $80.00
          </span>
        </div>
        <div className={styles["action-links"]}>
          <span className={"flex-center " + styles["action-link"]}><FaShoppingCart /></span>
          <span className={"flex-center " + styles["action-link"]}><FaRegHeart /></span>
          <span className={"flex-center " + styles["action-link"]}><FaRegEye /></span>
        </div>
      </div>
    </div>
  )
}

const Index = (props) => {
  const [value, setValue] = useState([20, 37]);
  const [layout, setLayout] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={12} lg={3} order={{md: 2, lg: 1}}>
            <div className={styles["categories"]}>
              <h3>Categories</h3>
              <div className={styles["name-filter"]}>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
              </div>
            </div>
            <div className={styles["navigation"]}>
              <h3>Layered Navigation</h3>
              <div className={styles["name-filter"]}>
                <h4>Filter By Price</h4>
                <hr />
                <div className={styles["filter-price"]}>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                  <div className={styles["price-filter"]}>
                    <span className={styles["from-price-filter"]}>${value[0]}</span>
                    <span>-</span>
                    <span className={styles["to-price-filter"]}>${value[1]}</span>
                  </div>
                </div>
              </div>
              <div className={styles["name-filter"]}>
                <h4>Manufacturer</h4>
                <hr />
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
              </div>              
              <div className={styles["name-filter"]}>
                <h4>Select By Color</h4>
                <hr />
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
                <div className={styles["category"]}>
                  <input type="checkbox" />
                  <label>Appliances (18)</label>
                </div>
              </div>             
            </div>
            <div className={styles["banner"]}>
              <img src="images/big-sale-banner.jpg" alt="Not found" />
            </div>
            <div className={styles["new-products"]}>
              <h2>NEW PRODUCTS</h2>
              <div className={styles["new-product"]}>
                <div className={styles["image-new-product"]}>
                  <img src="images/new-product-1.jpg" alt="Not found" />
                </div>
                <div className={styles["info-new-product"]}>
                  <div className={styles["stars"]}>
                    <span className={styles["star"] + " " + styles["active"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                  </div>
                  <a href="#"><b>JBL Flip 3 Portable</b></a>
                  <div className={styles["price-new-product"]}>$602.00</div>
                </div>
              </div>
              <div className={styles["new-product"]}>
                <div className={styles["image-new-product"]}>
                  <img src="images/new-product-1.jpg" alt="Not found" />
                </div>
                <div className={styles["info-new-product"]}>
                  <div className={styles["stars"]}>
                    <span className={styles["star"] + " " + styles["active"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                  </div>
                  <a href="#"><b>JBL Flip 3 Portable</b></a>
                  <div className={styles["price-new-product"]}>$602.00</div>
                </div>
              </div>
              <div className={styles["new-product"]}>
                <div className={styles["image-new-product"]}>
                  <img src="images/new-product-1.jpg" alt="Not found" />
                </div>
                <div className={styles["info-new-product"]}>
                  <div className={styles["stars"]}>
                    <span className={styles["star"] + " " + styles["active"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                  </div>
                  <a href="#"><b>JBL Flip 3 Portable</b></a>
                  <div className={styles["price-new-product"]}>$602.00</div>
                </div>
              </div>
              <div className={styles["new-product"]}>
                <div className={styles["image-new-product"]}>
                  <img src="images/new-product-1.jpg" alt="Not found" />
                </div>
                <div className={styles["info-new-product"]}>
                  <div className={styles["stars"]}>
                    <span className={styles["star"] + " " + styles["active"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                    <span className={styles["star"]}><FaStar /></span>
                  </div>
                  <a href="#"><b>JBL Flip 3 Portable</b></a>
                  <div className={styles["price-new-product"]}>$602.00</div>
                </div>
              </div>

            </div>
          </Grid>
          <Grid item md={12} lg={9} order={{md: 1, lg: 2}}>
            <div className={styles["banner"]}>
              <img src="images/save-big-banner.jpg" alt="Not found" />              
            </div>
            <div className={styles["toolbar"]}>
              <div className={styles["grid-layout"]}>
                <span onClick={() => setLayout(3)}>
                  <BsGrid3X3GapFill />
                </span>
                <span onClick={() => setLayout(4)}>
                  <BsGrid3X3GapFill />
                </span>
                <span onClick={() => setLayout(5)}>
                  <BsGrid3X3GapFill />
                </span>
                <span onClick={() => setLayout(2)}>
                  <AiOutlineMenu />
                </span>
              </div>
              <div className={styles["range-product"]}>
                Showing 1 to 12 of 14 (2 Pages)
              </div>
              <div className={styles["dropdown-option"]}>
                <label><b>Show: </b></label>
                <select>
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={50}>50</option>
                </select>
                <label><b>Sort by: </b></label>
                <select>
                  <option value={12}>Default</option>
                  <option value={24}>Name (A - Z)</option>
                  <option value={50}>Name (Z - A)</option>
                  <option value={50}>Price lowest</option>
                  <option value={50}>Price biggest</option>
                </select>
              </div>
            </div>
            <div className={styles["products"]}>
              <Grid container spacing={3}>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
                <Grid item md={12 / layout}>
                  <Product />
                </Grid>
              </Grid>
            </div>
            <div className={styles["pagination"]}>
              <Pagination count={10} size="large" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={styles["services"]}>
          <Container>
            <Grid container spacing={5}>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><FaShippingFast /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>Free Shipping</div>
                    <div className={styles["detail-service"]}>One order over $99</div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><FaDropbox /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>Special Gift Cards</div>
                    <div className={styles["detail-service"]}>Give the perfect gift</div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><FaRegCalendar /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>Daily Promotion</div>
                    <div className={styles["detail-service"]}>Set up perspiciatis unde</div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><TiMessages /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>24/7 Customer Care</div>
                    <div className={styles["detail-service"]}>Hours: 04.0987 654 321</div>
                  </div>
                </div>
              </Grid>           
            </Grid>
          </Container>
      </div>

    </>
  )
}

export default Index;