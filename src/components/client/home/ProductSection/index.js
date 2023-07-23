import { Container } from '@mui/material';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "@components/client/home/Home.module.css";
import { Navigation, Pagination } from "swiper";


import ProductCard from '@components/common/ProductCard';


const Index = props => {
    return (
        <div className={styles["module-product"]}>
        <Container>
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
                props.products.map(item => {
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