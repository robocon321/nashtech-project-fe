import React, { useState } from "react";
import { 
  Container, 
  Rating, 
  Grid,
  Tab,
  Box,
  Button
 } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FaShoppingCart, FaRegHeart, FaStar, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./ProductDetail.module.css";
import Input from "./../../common/Input";
import Service from './../../common/Service';

const Product = (item) => {
  return (
    <div className={styles["product"]}>
      <div className={styles["top-product"]}>
        <img src="/images/product_1.jpg" alt="Not found" />
        <div className={"flex-center " + styles["counter-product"]}><span>615 : 10 : 31 : 38</span></div>
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
          <Link to="/product/1">Sony XB10 Portable Wireless</Link>
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

const ProductDetail = (props) => {
  const [value, setValue] = useState('1');
  const [rating, setRating] = useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles["top-info"]}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className={styles["images-product-detail"]}>
                <div className={styles["main-image-product-detail"]}>
                  <img src="/images/product-detail-1.jpg" alt="Not found" />
                </div>
                <div className={styles["sub-images-product-detail"]}>
                  <Swiper 
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true} 
                    modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                      <div className={styles["sub-image-product-detail"]}>
                          <img src="/images/product-detail-1.jpg" alt="Not found" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["sub-image-product-detail"]}>
                          <img src="/images/product-detail-2.jpg" alt="Not found" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["sub-image-product-detail"]}>
                          <img src="/images/product-detail-3.jpg" alt="Not found" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["sub-image-product-detail"]}>
                          <img src="/images/product-detail-4.jpg" alt="Not found" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["sub-image-product-detail"]}>
                          <img src="/images/product-detail-5.jpg" alt="Not found" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles["sub-image-product-detail"]}>
                          <img src="/images/product-detail-6.jpg" alt="Not found" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <h2>Amazon Cloud Cam Security</h2>
              <div className={styles["review-overall"]}>
                <span className={styles["rating"]}>
                  <Rating name="read-only" value={4} readOnly />
                </span>
                <span className={styles["link-review-overall"]}>
                  <Link to="#">1 Reviews</Link>
                </span>
                <span> | </span>
                <span className={styles["write-review-overall"]}>
                  <Link to="#">Write A Review</Link>
                </span>
              </div>
              <p className={styles["description"]}>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse thr..</p>
              <p className={styles["info-product"]}>
                <ul>
                  <li>Ex Tax: $80.00</li>
                  <li>Brands <Link to="#">Apple</Link></li>
                  <li>Product Code: <b>Product 1</b></li>
                  <li>Availability: <b>In Stock</b></li>
                </ul>
              </p>
              <div className={styles["price-product"]}>$98.00</div>
              <div className={styles["action-links"]}>
                <label>Qty</label>
                <input type="number" min={0} id="quantity" name="quantity" />
                <button className={styles["btn-cart"]}><FaShoppingCart /> Add To Cart</button>
                <button className={styles["btn-wishlist"] + " " + "flex-center"}><FaRegHeart /> </button>
              </div>
              <div className={styles["tags"]}>
                <span>Tags:</span>
                <Link to="#"> Sport</Link>
                <span>,</span>
                <Link to="#"> Luxury</Link>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={styles["banners"]}>
                <div className={styles["banner"]}>
                  <img src="/images/product-detail-banner-1.jpg" alt="Not found" />
                </div>
                <div className={styles["banner"]}>
                  <img src="/images/product-detail-banner-2.jpg" alt="Not found" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles['tabs']}>
        <Container>
          <div className={styles["wrap-tabs"]}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Description" value="1" />
                <Tab label="Reviews" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <b>More room to move.</b>
              <p>With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go.</p>
              <b>Cover Flow.</b>
              <p>Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list.</p>
              <b>Enhanced interface.</b>
              <p>Experience a whole new way to browse and view your music and video.</p>
              <b>Sleeker design.</b>
              <p>Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polished stainless steel enclosure with rounded edges.</p>
            </TabPanel>
            <TabPanel value="2">
              <div className={styles["reviews"]}>
                <div className={styles["review"]}>
                  <div className={styles["avatar-review"]}>
                    <img src="/images/avatar.jpg" alt="Not found" />
                  </div>
                  <div className={styles["user-review"]}>
                    <h3>robocon321</h3>
                    <time>23/09/2021</time>
                    <p>It’s both good and bad. If Nikon had achieved a high-quality wide lens camera with a 1 inch sensor, that would have been a very competitive product. So in that sense, it’s good for us. But actually, from the perspective of driving the 1 inch sensor market, we want to stimulate this market and that means multiple manufacturers.</p>
                    <Rating name="read-only" value={4} readOnly />
                  </div>
                </div>
              </div>
              <div className={styles["review-form"]}>
                <h2>Write a review</h2>
                <Input 
                  type="textarea" 
                  title="Your review" 
                  id="content" 
                  name="content" 
                  props={{
                    rows: 10
                  }}
                  />
                  <div className={styles["rating-review-form"]}>
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event, newValue) => {
                        setRating(newValue);
                      }}
                    />
                  </div>
                  <Button variant="contained">Submit</Button>
              </div>

            </TabPanel>
          </TabContext>

          </div>
        </Container>
      </div>
      <div className={styles["related-product"]}>
      <Container>
      <h2>RELATED PRODUCT</h2>
        <div className={styles["products"]}>
          <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            loop={true}
            loopFillGroupWithBlank={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"        
            >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
      </div>
      <Service />
    </>
  )
}

export default ProductDetail;