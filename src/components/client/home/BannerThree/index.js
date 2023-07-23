import { Container } from '@mui/material';
import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@components/client/home/Home.module.css";
import { Grid } from '@mui/material';



const Index = props => {
    return (
        <div className={styles["banners"]}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <div className={styles["banner"]}>
                <img src="/images/banner-cameras.jpg" alt="Not found" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className={styles["banner"]}>
                    <img src="/images/banner-washing.jpg" alt="Not found" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={styles["banner"]}>
                    <img src="/images/banner-watch.jpg" alt="Not found" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className={styles["banner"]}>
                    <img src="/images/banner-sale.jpg" alt="Not found" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={styles["banner"]}>
                <img src="/images/banner-head-phone.jpg" alt="Not found" />
              </div>
            </Grid>            
          </Grid>
        </Container>
      </div>
    )
}

export default Index;