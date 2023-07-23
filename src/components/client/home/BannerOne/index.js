import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import styles from "@components/client/home/Home.module.css";



const Index = (props) => {
    return (
        <div className="banners">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className={styles["banner-carousel"]}>
              <img src="/images/main-banner-1.jpg" alt="Not found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["banner-carousel"]}>
              <img src="/images/main-banner-2.jpg" alt="Not found" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    )
}

export default Index;