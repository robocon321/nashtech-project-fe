import {
  Alert,
  Container,
  Snackbar
} from "@mui/material";
import React, { useContext } from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "@components/client/product-detail/ProductDetail.module.css";
import Tabs from "@components/client/product-detail/Tabs/index";
import TopInfo from "@components/client/product-detail/TopInfo/index";
import RelatedProduct from "@components/client/product-detail/RelatedProduct/index";
import Service from "@components/common/Service";

import Loading from "@components/common/Loading";
import ProductCard from "@components/common/ProductCard";
import RequiredLoginModal from "@components/common/RequiredLoginModal";
import { ProductDetailCotnext } from "@providers/client/ProductDetailProvider";
import { Helmet } from "react-helmet";

const ProductDetail = (props) => {
  const {
    productDetailState,
    resetStatus,
    toggleModal
  } = useContext(ProductDetailCotnext);

  return (
    <>
      {
        productDetailState.product.id ? 
        (
          <Helmet>
            <title>{productDetailState.product.metaTitle ? productDetailState.product.metaTitle : productDetailState.product.name}</title>
            <meta name="description" content={productDetailState.product.metaDescription ? productDetailState.product.metaDescription : productDetailState.product.description} />
          </Helmet>
        ) : 
        (
          <Helmet>
            <title>Detail Product</title>
            <meta name="description" content="Detail Product TienDa Store" />
          </Helmet>
        )
      }
      <RequiredLoginModal toggleModal={toggleModal} open={productDetailState.open_modal} />
      {productDetailState.status.isLoading && <Loading />}
      <TopInfo />
      <Tabs />
      <RelatedProduct />
      <Service />
      <Snackbar
        open={productDetailState.status.message !== ""}
        onClose={resetStatus}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={resetStatus}
          severity={productDetailState.status.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {productDetailState.status.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetail;
