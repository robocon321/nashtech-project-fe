import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {Box, Button, Container, Rating, Tab} from "@mui/material";
import React, {useContext, useState} from "react";

import styles from "@components/client/product-detail/ProductDetail.module.css";
import Input from "@components/common/Input";

import {ProductDetailCotnext} from "@providers/client/ProductDetailProvider";
import Moment from "react-moment";

const Index = (props) => {
    const {
        productDetailState,
        setRatingForm,
        submit,
        checkLoginBeforeRating,
    } = useContext(ProductDetailCotnext);

    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={styles["tabs"]}>
            <Container>
                <div className={styles["wrap-tabs"]}>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: "divider"
                            }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Description" value="1"/>
                                <Tab label="Reviews" value="2"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: productDetailState.product.fullDescription
                                }}></div>
                        </TabPanel>
                        <TabPanel value="2">
                            {
                                productDetailState.ratings.content && (
                                    <div className={styles["reviews"]}>
                                        {
                                            productDetailState
                                                .ratings
                                                .content
                                                .map((item) => (
                                                    <div className={styles["review"]} key={item.id}>
                                                        <div className={styles["avatar-review"]}>
                                                            <img src={item.user.avatar} alt="Not found"/>
                                                        </div>
                                                        <div className={styles["user-review"]}>
                                                            <h3>{item.user.username}</h3>
                                                            <Moment format="DD/MM/YYYY">
                                                                {item.createTime}
                                                            </Moment>
                                                            <p>{item.content}</p>
                                                            <Rating name="read-only" value={item.star} readOnly="readOnly"/>
                                                        </div>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                )
                            }
                            <div
                                className={styles["review-form"]}
                                id="review"
                                onClick={checkLoginBeforeRating}>
                                <h2>Write a review</h2>
                                <Input
                                    type="textarea"
                                    title="Your review"
                                    id="content"
                                    name="content"
                                    onChange={setRatingForm}
                                    props={{
                                        rows: 10
                                    }}/>
                                <div className={styles["rating-review-form"]}>
                                    <Rating
                                        name="star"
                                        value={parseInt(productDetailState.rating_form.star)}
                                        onChange={(event, newValue) => setRatingForm(event)}/>
                                </div>
                                <Button variant="contained" onClick={submit}>
                                    Submit
                                </Button>
                            </div>
                        </TabPanel>
                    </TabContext>
                </div>
            </Container>
        </div>

    )
}

export default Index;