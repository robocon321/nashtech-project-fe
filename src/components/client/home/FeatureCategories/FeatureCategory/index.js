import React from "react";

import styles from "@components/client/home/Home.module.css";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Index = (props) => {
    return (
        <Grid item="item" xs={12} md={6}>
        <div className={styles["feature"]}>
            <div className={styles["list-feature"]}>
                <h3>
                    {props.item.title}
                </h3>
                <ul>
                    {
                        props.item.links.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to="/product">{item}</Link>
                                </li>        
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles["image-feature"]}>
                <img src={props.item.image} alt="Not found"/>
            </div>
        </div>
    </Grid>

    )
}

export default Index;