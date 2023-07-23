import React from "react";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import ProductCard from '@components/common/ProductCard';

const Index = props => {
    return (
        <> 
            {
                props
                    .products
                    .map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <ProductCard item={item}/>
                            </SwiperSlide>
                        )
                    })
            } 
        </>
    )
}

export default Index;