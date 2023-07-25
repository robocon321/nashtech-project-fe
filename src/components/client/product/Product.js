import { Container, Grid } from "@mui/material";
import React, { useContext, useState } from "react";

import Services from "@components/common/Service";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import { Helmet } from "react-helmet";
import styles from "./Product.module.css";

import Banner from "@components/client/product/Banner/index";
import Categories from "@components/client/product/Categories/index";
import Navigation from "@components/client/product/Navigation/index";
import NewProducts from "@components/client/product/NewProducts/index";
import Pagination from "@components/client/product/Pagination/index";
import Products from "@components/client/product/Products/index";
import Toolbar from "@components/client/product/Toolbar/index";

const Index = (props) => {
  const { t } =
  useContext(ClientLayoutContext);

  const [layout, setLayout] = useState(3);

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
              <Categories />
              <Navigation />
              <Banner image="/images/big-sale-banner.jpg" />
              <NewProducts />
            </Grid>
            <Grid item md={12} lg={9} order={{ md: 1, lg: 2 }}>
              <Banner image="/images/save-big-banner.jpg" />
              <Toolbar setLayout={setLayout} />
              <Products layout={layout} />
              <Pagination />
            </Grid>
          </Grid>
        </Container>
        <Services />
      </div>
    </>
  );
};

export default Index;
