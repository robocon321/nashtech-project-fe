import {Container, Grid} from "@mui/material";
import React, {useContext} from "react";

import styles from "@components/client/product-detail/ProductDetail.module.css";

import ActionLink from "@components/client/product-detail/TopInfo/ActionLink/index";
import Banners from "@components/client/product-detail/TopInfo/Banners/index";
import Description from "@components/client/product-detail/TopInfo/Description/index";
import ImageProductDetail from "@components/client/product-detail/TopInfo/ImageProductDetail/index";
import InfoProduct from "@components/client/product-detail/TopInfo/InfoProduct/index";
import PriceProduct from "@components/client/product-detail/TopInfo/PriceProduct/index";
import ReviewOverall from "@components/client/product-detail/TopInfo/ReviewOverall/index";
import Tags from "@components/client/product-detail/TopInfo/Tags/index";

import {ProductDetailCotnext} from "@providers/client/ProductDetailProvider";

const Index = props => {
    const {productDetailState} = useContext(ProductDetailCotnext);

    return (
        <div className={styles["top-info"]}>
            <Container>
                <Grid container="container" spacing={2}>
                    <Grid item="item" xs={12} md={4}>
                        <ImageProductDetail/>
                    </Grid>
                    <Grid item="item" xs={12} md={5}>
                        <h2>{productDetailState.product.name}</h2>
                        <ReviewOverall/>
                        <Description/>
                        <InfoProduct/>
                        <PriceProduct/>
                        <ActionLink/>
                        <Tags/>
                    </Grid>
                    <Grid item="item" xs={12} md={3}>
                        <Banners/>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default Index;