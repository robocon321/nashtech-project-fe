import { Container } from '@mui/material';
import React, { useContext } from "react";

import styles from "@components/client/home/Home.module.css";
import { Grid } from '@mui/material';

import FeatureCategory from "@components/client/home/FeatureCategories/FeatureCategory/index";
import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";

const features = [
    {
        title: "ELECTRONICS",
        links: ["Calculators", "Check Trousers", "Ink & Toner", "Low-Cut Jeans"],
        image: '/images/feature-1.png'
    },
    {
        title: "PHOTOS & CAMERAS",
        links: ["Calculators", "Check Trousers", "Ink & Toner", "Low-Cut Jeans"],
        image: "/images/feature-2.png"
    },
    {
        title: "PHONES & TABLETS",
        links: ["Calculators", "Check Trousers", "Ink & Toner", "Low-Cut Jeans"],
        image: "/images/feature-3.png"
    },
    {
        title: "TV & CINEMA",
        links: ["Calculators", "Check Trousers", "Ink & Toner", "Low-Cut Jeans"],
        image: "/images/feature-4.png"
    }
]

const Index = props => {
    const {t} = useContext(ClientLayoutContext);

    return (
        <div className={styles["features-category"]}>
            <Container>
                <h2>{t('feature_category')}</h2>
                <Grid container="container" spacing={3}>
                    {
                        features.map((item, index) => <FeatureCategory key={index} item={item} />)
                    }
                </Grid>
            </Container>
        </div>

    )
}

export default Index;