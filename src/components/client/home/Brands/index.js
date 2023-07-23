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
        <div className={styles["brands"]}>
        <Container>
          <Grid container spacing={2}>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-1.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-2.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-3.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-4.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-5.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-6.jpg" alt="Not found" />
                </div>
              </Grid>
          </Grid>
        </Container>
      </div>
    )
}

export default Index;