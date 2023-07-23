import { Container } from '@mui/material';
import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@components/client/home/Home.module.css";



const Index = props => {
    return (
        <div className={styles["banner"] + " " + styles["sub-banner"]}>
        <Container>
          <img src="/images/home-banner-3.jpg" alt="Not found" />
        </Container>
      </div>
    )
}

export default Index;