import React from 'react';
import { Container, Grid } from '@mui/material';
import { FaShippingFast, FaDropbox, FaRegCalendar } from 'react-icons/fa';
import { TiMessages }  from 'react-icons/ti';

import styles from './Service.module.css';

const Services = (props) => {
  return (
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
  )
}

export default Services;