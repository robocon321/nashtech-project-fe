import {Container} from '@mui/material';
import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "@components/client/home/Home.module.css";
import {Grid} from '@mui/material';
import {FaRegCalendarAlt, FaRegUser} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {Autoplay, Pagination} from "swiper";
import {useContext} from 'react';
import {ClientLayoutContext} from '@providers/client/ClientLayoutProvider';

const Index = props => {
    const {t} = useContext(ClientLayoutContext);

    return (
        <div className={styles["blog-section"]}>
            <Container>
                <Grid container="container" spacing={5}>
                <Grid item="item" xs={12} md={6}>
                    <h3>{t('latest_blog')}</h3>
                        <div className={styles["blogs"]}>
                            <Swiper
                                spaceBetween={30}
                                pagination={true}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper">
                                <SwiperSlide>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>

                    <Grid item="item" xs={12} md={6}>
                        <h3>{t('testimonials')}</h3>
                        <div className={styles["blogs"]}>
                            <Swiper
                                spaceBetween={30}
                                pagination={true}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper">
                                <SwiperSlide>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles["blog"]}>
                                        <div className={styles["image-blog"]}>
                                            <img src="/images/blog-1.jpg" alt="Not found"/>
                                        </div>
                                        <div className={styles["info-blog"]}>
                                            <h4>
                                                <Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link>
                                            </h4>
                                            <div className={styles["author-date"]}>
                                                <span className={styles["author"]}>
                                                    <FaRegUser/>
                                                    <span>by Robocon321</span>
                                                </span>
                                                <span className={styles["date"]}>
                                                    <FaRegCalendarAlt/>
                                                    <span>30 Oct 2017</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    )
}

export default Index;