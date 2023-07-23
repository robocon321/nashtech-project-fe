import { Container } from '@mui/material';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@components/client/home/Home.module.css";
import { Navigation, Pagination } from "swiper";

import ListProductSlice from '@components/client/home/TabProducts/ListProductSlice/index';
import { ClientLayoutContext } from '@providers/client/ClientLayoutProvider';
import { HomeContext } from '@providers/client/HomeProvider';
import { useContext, useState } from 'react';
import ProductCard from '@components/common/ProductCard';

const Index = props => {
    const { homeState } = useContext(HomeContext);
    const { t } =
      useContext(ClientLayoutContext);
  
      const [tab, setTab] = useState(0);
  
    return (
        <div className={styles["tabproducts"]}>
        <Container>
          <div className={styles["tabs"]}>
            <div className={tab === 0 ? styles["tab"] + " " + styles["active"] : styles["tab"]} onClick={() => setTab(0)}>{t('featured')}</div>
            <div className={tab === 1 ? styles["tab"] + " " + styles["active"] : styles["tab"]} onClick={() => setTab(1)}>{t('bestseller')}</div>
            <div className={tab === 2 ? styles["tab"] + " " + styles["active"] : styles["tab"]} onClick={() => setTab(2)}>{t('newest')}</div>
          </div>
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
            {
              tab === 0 ? homeState.feature_products.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                )
              }) : tab === 1 ? homeState.best_seller_products.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                )
              }) : homeState.newest_products.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </Container>
    </div>

    )
}

export default Index;