import React, { useContext, useState } from "react";
import { Container, Slider, Pagination } from "@mui/material";
import { Grid } from "@mui/material";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "@components/common/ProductCard";

import styles from "./Product.module.css";
import Services from "@components/common/Service";
import { ProductContext } from "@providers/client/ProductProvider";
import Input from "@components/common/Input";
import { Helmet } from "react-helmet";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const Index = (props) => {
  const {
    productState,
    changePageCondition,
    changeFieldCondition,
    setField,
    changeCategory,
    categories,
  } = useContext(ProductContext);
  const { changeLang, t, lang } =
  useContext(ClientLayoutContext);


  const [value, setValue] = useState([10000, 10000000]);
  const [layout, setLayout] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMouseUp = (e) => {
    setField({field: "BT_sellPrice", value: `${value[0]},${value[1]}`});
  };

  return (
    <>
      <Helmet>
        <title>{t('shop')}</title>
        <meta name="description" content="Shop TienDa Store" />
      </Helmet>
      <div className={styles["wrap-main"]}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={12} lg={3} order={{ md: 2, lg: 1 }}>
              <div className={styles["categories"]}>
                <h3>Categories</h3>
                <div className={styles["name-filter"]}>
                  <Input
                    type="checkbox"
                    name="product"
                    style={{
                      margin: "10px 0px",
                    }}
                    props={{
                      data: categories,
                      key: "name",
                      value: "id",
                    }}
                    onChange={(e) => changeCategory()}
                  />
                </div>
              </div>
              <div className={styles["navigation"]}>
                <h3>Layered Navigation</h3>
                <div className={styles["name-filter"]}>
                  <h4>Filter By Price</h4>
                  <hr />
                  <div className={styles["filter-price"]}>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      min={10000}
                      max={10000000}
                      onChange={handleChange}
                      onMouseUp={handleMouseUp}
                      valueLabelDisplay="auto"
                    />
                    <div className={styles["price-filter"]}>
                      <span className={styles["from-price-filter"]}>
                        {formatter.format(value[0])}
                      </span>
                      <span>-</span>
                      <span className={styles["to-price-filter"]}>
                        {formatter.format(value[1])}
                      </span>
                    </div>
                  </div>
                </div>
                {/* <div className={styles["name-filter"]}>
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
                </div> */}
              </div>
              <div className={styles["banner"]}>
                <img src="/images/big-sale-banner.jpg" alt="Not found" />
              </div>
              <div className={styles["new-products"]}>
                <h2>POPULAR PRODUCTS</h2>
                {productState.popular_products.map((item) => (
                  <div className={styles["new-product"]} key={item.id}>
                    <div className={styles["image-new-product"]}>
                      <img src={item.thumbnail} alt="Not found" />
                    </div>
                    <div className={styles["info-new-product"]}>
                      <div className={styles["stars"]}>
                        <span
                          className={item.rating > 0 ? styles["star"] + " " + styles["active"] : styles["star"]}
                        >
                          <FaStar />
                        </span>
                        <span className={item.rating > 1 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                          <FaStar />
                        </span>
                        <span className={item.rating > 2 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                          <FaStar />
                        </span>
                        <span className={item.rating > 3 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                          <FaStar />
                        </span>
                        <span className={item.rating > 4 ? styles["star"] + " " + styles["active"] : styles["star"]}>
                          <FaStar />
                        </span>
                      </div>
                      <Link to={item.slug}>
                        <b>{item.name}</b>
                      </Link>
                      <div className={styles["price-new-product"]}>
                        {formatter.format(item.sellPrice)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item md={12} lg={9} order={{ md: 1, lg: 2 }}>
              <div className={styles["banner"]}>
                <img src="/images/save-big-banner.jpg" alt="Not found" />
              </div>
              <div className={styles["toolbar"]}>
                <div className={styles["grid-layout"]}>
                  <span onClick={() => setLayout(3)}>
                    <BsGrid3X3GapFill />
                  </span>
                  <span onClick={() => setLayout(4)}>
                    <BsGrid3X3GapFill />
                  </span>
                  <span onClick={() => setLayout(2)}>
                    <AiOutlineMenu />
                  </span>
                </div>
                <div className={styles["range-product"]}>
                  Showing{" "}
                  {productState.products.number * productState.products.size} to{" "}
                  {productState.products.number * productState.products.size +
                    productState.products.numberOfElements}{" "}
                  of {productState.products.totalPages} Pages
                </div>
                <div className={styles["dropdown-option"]}>
                  <label>
                    <b>Show: </b>
                  </label>
                  <select name="size" onChange={changeFieldCondition}>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={30}>30</option>
                  </select>
                  <label>
                    <b>Sort by: </b>
                  </label>
                  <select name="sort" onChange={changeFieldCondition}>
                    <option value="createTime__desc">Default</option>
                    <option value="name__asc">Name (A - Z)</option>
                    <option value="name__desc">Name (Z - A)</option>
                    <option value="sellPrice__asc">Price lowest</option>
                    <option value="sellPrice__desc">Price biggest</option>
                  </select>
                </div>
              </div>
              <div className={styles["products"]}>
                <Grid container spacing={3}>
                  {productState.products.content &&
                    productState.products.content.map((item) => (
                      <Grid item md={12 / layout} key={item.id}>
                        <ProductCard item={item} />
                      </Grid>
                    ))}
                </Grid>
              </div>
              <div className={styles["pagination"]}>
                {productState.products.content && (
                  <Pagination
                    count={productState.products.totalPages}
                    page={productState.products.number + 1}
                    onChange={changePageCondition}
                    size="large"
                  />
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
        <Services />
      </div>
    </>
  );
};

export default Index;
