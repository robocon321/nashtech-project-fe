import React from "react";

import styles from "@components/client/home/Home.module.css";
import { Grid } from '@mui/material';

const Index = props => {
    return (
        <Grid item="item" md={6}>
            <div className={styles["head-module-category"]}>
                <div className={"flex-center " + styles["icon-module-category"]}>
                    {props.item.icon}
                </div>
                <div className={styles["title-module-category"]}>
                    <span>{props.item.title}</span>
                </div>
            </div>
            <div className={styles["image-module-category"]}>
                <img src={props.item.image} alt="Not found"/>
            </div>
        </Grid>

    )
}

export default Index;