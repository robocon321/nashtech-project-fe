import React, { useContext } from "react";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "@components/client/product-detail/ProductDetail.module.css";

import { ProductDetailCotnext } from "@providers/client/ProductDetailProvider";

const Index = props => {
    const {
        productDetailState,
      } = useContext(ProductDetailCotnext);

    return (
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

    )
}

export default Index;