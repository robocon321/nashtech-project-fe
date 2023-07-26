import {
    Container
} from "@mui/material";
import React, { useContext } from "react";
  
  import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
  
  import styles from "@components/client/product-detail/ProductDetail.module.css";
  
  import ProductCard from "@components/common/ProductCard";
import { ProductDetailCotnext } from "@providers/client/ProductDetailProvider";
  
  const Index = (props) => {
    const {
      productDetailState,
    } = useContext(ProductDetailCotnext);

    return (
        <div className={styles["related-product"]}>
        <Container>
          <h2>RELATED PRODUCT</h2>
          <div className={styles["products"]}>
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
              {productDetailState.related_products.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <ProductCard item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>
      </div>

    )
}

export default Index;