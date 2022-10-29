import React, { useContext, useState } from "react";
import {
  Container,
  Rating,
  Grid,
  Tab,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./ProductDetail.module.css";
import Input from "./../../common/Input";
import Service from "./../../common/Service";

import { ProductDetailCotnext } from "../../../contexts/providers/client/ProductDetailProvider";
import Loading from "../../common/Loading";
import Moment from "react-moment";
import RequiredLoginModal from "../../common/RequiredLoginModal";
import ProductCard from "../../common/ProductCard";

const ProductDetail = (props) => {
  const {
    productDetailState,
    setRatingForm,
    resetStatus,
    submit,
    checkLoginBeforeRating,
    toggleModal
  } = useContext(ProductDetailCotnext);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <RequiredLoginModal toggleModal={toggleModal} open={productDetailState.open_modal} />
      {productDetailState.status.isLoading && <Loading />}
      <div className={styles["top-info"]}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className={styles["images-product-detail"]}>
                <div className={styles["main-image-product-detail"]}>
                  <img
                    src={productDetailState.product.thumbnail}
                    alt="Not found"
                  />
                </div>
                {productDetailState.product.gallery &&
                  productDetailState.product.gallery.length > 0 && (
                    <div className={styles["sub-images-product-detail"]}>
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {productDetailState.product.gallery.map(
                          (item, index) => (
                            <SwiperSlide key={index}>
                              <div
                                className={styles["sub-image-product-detail"]}
                              >
                                <img src={item.image} alt="Not found" />
                              </div>
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    </div>
                  )}
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <h2>{productDetailState.product.name}</h2>
              <div className={styles["review-overall"]}>
                <span className={styles["rating"]}>
                  <Rating
                    name="read-only"
                    value={Math.ceil(productDetailState.product.rating)}
                    readOnly
                  />
                </span>
                <span className={styles["link-review-overall"]}>
                  <Link to="#">
                    {productDetailState.ratings.totalElements} Reviews
                  </Link>
                </span>
                <span> | </span>
                <span className={styles["write-review-overall"]}>
                  <Link to="#review">Write A Review</Link>
                </span>
              </div>
              <p className={styles["description"]}>
                {productDetailState.product.description}
              </p>
              <div className={styles["info-product"]}>
                <ul>
                  <li>Ex Tax: $80.00</li>
                  <li>
                    Category{" "}
                    {productDetailState.product.categories &&
                      productDetailState.product.categories.map(
                        (item, index) => (
                          <Link key={item.id} to="#">
                            {item.name +
                              (productDetailState.product.categories.length -
                                1 ===
                              index
                                ? ""
                                : ", ")}
                          </Link>
                        )
                      )}
                  </li>
                  <li>
                    Product Code: <b>Product {productDetailState.product.id}</b>
                  </li>
                  <li>
                    Stock: <b>{productDetailState.product.stock}</b>
                  </li>
                </ul>
              </div>
              <div className={styles["price-product"]}>
                {productDetailState.product.sellProduct}
              </div>
              <div className={styles["action-links-product"]}>
                <label>Qty</label>
                <input
                  type="number"
                  min={0}
                  max={productDetailState.product.stock}
                  id="quantity"
                  name="quantity"
                />
                <button className={styles["btn-cart"]}>
                  <FaShoppingCart /> Add To Cart
                </button>
                <button
                  className={styles["btn-wishlist"] + " " + "flex-center"}
                >
                  <FaRegHeart />{" "}
                </button>
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
                  <img
                    src="/images/product-detail-banner-1.jpg"
                    alt="Not found"
                  />
                </div>
                <div className={styles["banner"]}>
                  <img
                    src="/images/product-detail-banner-2.jpg"
                    alt="Not found"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles["tabs"]}>
        <Container>
          <div className={styles["wrap-tabs"]}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Description" value="1" />
                  <Tab label="Reviews" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div
                  dangerouslySetInnerHTML={{
                    __html: productDetailState.product.fullDescription,
                  }}
                ></div>
              </TabPanel>
              <TabPanel value="2">
                {productDetailState.ratings.content && (
                  <div className={styles["reviews"]}>
                    {productDetailState.ratings.content.map((item) => (
                      <div className={styles["review"]} key={item.id}>
                        <div className={styles["avatar-review"]}>
                          <img src={item.user.avatar} alt="Not found" />
                        </div>
                        <div className={styles["user-review"]}>
                          <h3>{item.user.username}</h3>
                          <Moment format="DD/MM/YYYY">
                            {item.createTime}
                          </Moment>
                          <p>{item.content}</p>
                          <Rating name="read-only" value={item.star} readOnly />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div
                  className={styles["review-form"]}
                  id="review"
                  onClick={checkLoginBeforeRating}
                >
                  <h2>Write a review</h2>
                  <Input
                    type="textarea"
                    title="Your review"
                    id="content"
                    name="content"
                    onChange={setRatingForm}
                    props={{
                      rows: 10,
                    }}
                  />
                  <div className={styles["rating-review-form"]}>
                    <Rating
                      name="star"
                      value={parseInt(productDetailState.rating_form.star)}
                      onChange={(event, newValue) => setRatingForm(event)}
                    />
                  </div>
                  <Button variant="contained" onClick={submit}>
                    Submit
                  </Button>
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
              {productDetailState.related_products.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </div>
      <Service />
      <Snackbar
        open={productDetailState.status.message !== ""}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={productDetailState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {productDetailState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetail;
