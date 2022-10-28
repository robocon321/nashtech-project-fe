import React, { useContext, useState } from "react";
import { Container } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Grid } from '@mui/material';
import styles from "./Home.module.css";
import { FaRegUser, FaRegCalendarAlt, FaRegEye, FaRegHeart, FaShoppingCart, FaShippingFast, FaDropbox, FaRegCalendar, FaStar } from 'react-icons/fa';
import { TiMessages }  from 'react-icons/ti';
import { FiMonitor } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
import { AiTwotoneAudio } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HomeContext } from "../../../contexts/providers/client/HomeProvider";

const Product = ({item}) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const stars = [];
  for(var i = 1; i <= 5; i ++) {
    if(i <= item.rating) {
      stars.push(<span className={styles["star"] + " " + styles["active"]} key={i}><FaStar /></span>);
    } else {
      stars.push(<span className={styles["star"]} key={i}><FaStar /></span>);
    }
  }

  return (
    <div className={styles["product"]}>
    <div className={styles["top-product"]}>
      <img src={item.thumbnail} alt="Not found" />
      <div className={"flex-center " + styles["counter-product"]}><span>615 : 10 : 31 : 38</span></div>
      <div className={styles["discount-product"]}>-{Math.ceil((item.realPrice - item.sellPrice) * 100 / item.realPrice)}%</div>
    </div>
    <div className={styles["bottom-product"]}>
      <div className={styles["stars"]}>
        {
          stars.map((item) => item)
        }
      </div>
      <div className={styles["title-product"]}>
        <Link to={`/product/${item.slug}`}>{item.name}</Link>
      </div>
      <div className={styles["price-product"]}>
        <span className={styles["discount-price-product"]}>{formatter.format(item.sellPrice)}</span>
        <span className={styles["real-price-product"]}>
          {formatter.format(item.realPrice)}
        </span>
      </div>
      <div className={styles["action-links"]}>
        <span className={"flex-center " + styles["action-link"]}><FaShoppingCart /></span>
        <span className={"flex-center " + styles["action-link"]}><FaRegHeart /></span>
        <span className={"flex-center " + styles["action-link"]}><FaRegEye /></span>
      </div>
    </div>
  </div>      
  )

}

const Home = (props) => {
  const { homeState } = useContext(HomeContext);
  const [tab, setTab] = useState(0);

  return (
    <>
      <div className="banners">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className={styles["banner-carousel"]}>
              <img src="/images/main-banner-1.jpg" alt="Not found" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles["banner-carousel"]}>
              <img src="/images/main-banner-2.jpg" alt="Not found" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles["services"]}>
          <Container>
            <Grid container spacing={5}>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><FaShippingFast /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>Free Shipping</div>
                    <div className={styles["detail-service"]}>One order over $99</div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><FaDropbox /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>Special Gift Cards</div>
                    <div className={styles["detail-service"]}>Give the perfect gift</div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><FaRegCalendar /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>Daily Promotion</div>
                    <div className={styles["detail-service"]}>Set up perspiciatis unde</div>
                  </div>
                </div>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <div className={styles["service"]}>
                  <div className={"flex-center " + styles["icon-service"]}><TiMessages /></div>
                  <div className={styles["info-service"]}>
                    <div className={styles["title-service"]}>24/7 Customer Care</div>
                    <div className={styles["detail-service"]}>Hours: 04.0987 654 321</div>
                  </div>
                </div>
              </Grid>           
            </Grid>
          </Container>
      </div>
      <div className={styles["tabproducts"]}>
          <Container>
            <div className={styles["tabs"]}>
              <div className={tab === 0 ? styles["tab"] + " " + styles["active"] : styles["tab"]} onClick={() => setTab(0)}>FEATURED</div>
              <div className={tab === 1 ? styles["tab"] + " " + styles["active"] : styles["tab"]} onClick={() => setTab(1)}>BESTSELLER</div>
              <div className={tab === 2 ? styles["tab"] + " " + styles["active"] : styles["tab"]} onClick={() => setTab(2)}>NEWEST</div>
            </div>
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
              {
                tab === 0 ? homeState.feature_products.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Product item={item} />
                    </SwiperSlide>
                  )
                }) : tab === 1 ? homeState.best_seller_products.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Product item={item} />
                    </SwiperSlide>
                  )
                }) : homeState.newest_products.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Product item={item} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </Container>
      </div>
      <div className={styles["banner"] + " " + styles["sub-banner"]}>
        <Container>
          <img src="/images/home-banner-3.jpg" alt="Not found" />
        </Container>
      </div>
      <div className={styles["module-category"]}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <div className={styles["head-module-category"]}>
                <div className={"flex-center " + styles["icon-module-category"]}>
                  <BsPhone />
                </div>
                <div className={styles["title-module-category"]}>PHONES & TABLETS</div>                
              </div>
              <div className={styles["image-module-category"]}>
                <img src="/images/banner-phone.jpg" alt="Not found" />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={styles["head-module-category"]}>
                <div className={"flex-center " + styles["icon-module-category"]}>
                  <FiMonitor />
                </div>
                <div className={styles["title-module-category"]}><span>COMPUTER</span></div>                
              </div>
              <div className={styles["image-module-category"]}>
                <img src="/images/banner-computer.jpg" alt="Not found" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles["module-product"]}>
        <Container>
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
              {
                homeState.phone_computer_products.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Product item={item} />
                    </SwiperSlide>
                  )
                })
              }
              </Swiper>
        </Container>
      </div>
      <div className={styles["module-category"]}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <div className={styles["head-module-category"]}>
                <div className={"flex-center " + styles["icon-module-category"]}>
                  <AiTwotoneAudio />
                </div>
                <div className={styles["title-module-category"]}>TV & CINEMA</div>                
              </div>
              <div className={styles["image-module-category"]}>
                <img src="/images/banner-tv.jpg" alt="Not found" />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={styles["head-module-category"]}>
                <div className={"flex-center " + styles["icon-module-category"]}>
                  <FiMonitor />
                </div>
                <div className={styles["title-module-category"]}><span>AUDIO</span></div>                
              </div>
              <div className={styles["image-module-category"]}>
                <img src="/images/banner-audio.jpg" alt="Not found" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={styles["module-product"]}>
        <Container>
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
               {
                homeState.tv_camera_products.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Product item={item} />
                    </SwiperSlide>
                  )
                })
              }
              </Swiper>
        </Container>
      </div>
      <div className={styles["banners"]}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <div className={styles["banner"]}>
                <img src="/images/banner-cameras.jpg" alt="Not found" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className={styles["banner"]}>
                    <img src="/images/banner-washing.jpg" alt="Not found" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={styles["banner"]}>
                    <img src="/images/banner-watch.jpg" alt="Not found" />
                  </div>
                </Grid>
                <Grid item xs={12} md={12}>
                  <div className={styles["banner"]}>
                    <img src="/images/banner-sale.jpg" alt="Not found" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className={styles["banner"]}>
                <img src="/images/banner-head-phone.jpg" alt="Not found" />
              </div>
            </Grid>            
          </Grid>
        </Container>
      </div>
      <div className={styles["features-category"]}>
        <Container>
          <h2>FEATURED CATEGORIES</h2>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className={styles["feature"]}>
                <div className={styles["list-feature"]}>
                  <h3>
                    ELECTRONICS
                  </h3>
                  <ul>
                    <li><Link to="/product">Calculators</Link></li>
                    <li><Link to="/product">Check Trousers</Link></li>
                    <li><Link to="/product">Ink & Toner</Link></li>
                    <li><Link to="/product">Low-Cut Jeans</Link></li>
                  </ul>
                </div>
                <div className={styles["image-feature"]}>
                  <img src="/images/feature-1.png" alt="Not found" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles["feature"]}>
                <div className={styles["list-feature"]}>
                  <h3>
                    PHOTOS & CAMERAS
                  </h3>
                  <ul>
                    <li><Link to="#">Calculators</Link></li>
                    <li><Link to="#">Check Trousers</Link></li>
                    <li><Link to="#">Ink & Toner</Link></li>
                    <li><Link to="#">Low-Cut Jeans</Link></li>
                  </ul>
                </div>
                <div className={styles["image-feature"]}>
                  <img src="/images/feature-2.png" alt="Not found" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles["feature"]}>
                <div className={styles["list-feature"]}>
                  <h3>
                    PHONES & TABLETS
                  </h3>
                  <ul>
                    <li><Link to="/product">Calculators</Link></li>
                    <li><Link to="/product">Check Trousers</Link></li>
                    <li><Link to="/product">Ink & Toner</Link></li>
                    <li><Link to="/product">Low-Cut Jeans</Link></li>
                  </ul>
                </div>
                <div className={styles["image-feature"]}>
                  <img src="/images/feature-3.png" alt="Not found" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={styles["feature"]}>
                <div className={styles["list-feature"]}>
                  <h3>
                    TV & CINEMA
                  </h3>
                  <ul>
                    <li><Link to="#">Calculators</Link></li>
                    <li><Link to="#">Check Trousers</Link></li>
                    <li><Link to="#">Ink & Toner</Link></li>
                    <li><Link to="#">Low-Cut Jeans</Link></li>
                  </ul>
                </div>
                <div className={styles["image-feature"]}>
                  <img src="/images/feature-4.png" alt="Not found" />
                </div>
              </div>
            </Grid>       
          </Grid>
        </Container>
      </div>
      <div className={styles["posts"]}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <h3>LATEST BLOGS</h3>
              <div className={styles["blogs"]}>
              <Swiper
                spaceBetween={30}
                pagination={true} 
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>                
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>                
                </SwiperSlide>
              </Swiper>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <h3>TESTIMONIALS</h3>
              <div className={styles["blogs"]}>
              <Swiper
                spaceBetween={30}
                pagination={true} 
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>                
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["blog"]}>
                    <div className={styles["image-blog"]}>
                      <img src="/images/blog-1.jpg" alt="Not found" />
                    </div>
                    <div className={styles["info-blog"]}>
                      <h4><Link to="#">Best Of Hair & Makeup New York Spring/Summer 2016</Link></h4>
                      <div className={styles["author-date"]}>
                        <span className={styles["author"]}>
                          <FaRegUser /> <span>by Robocon321</span>
                        </span>
                        <span className={styles["date"]}>
                          <FaRegCalendarAlt /> <span>30 Oct 2017</span>
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
      <div className={styles["brands"]}>
        <Container>
          <Grid container spacing={2}>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-1.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-2.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-3.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-4.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-5.jpg" alt="Not found" />
                </div>
              </Grid>
              <Grid item xs={6} md={4} lg={2}>
                <div className={styles["brand"]}>
                  <img src="/images/brand-6.jpg" alt="Not found" />
                </div>
              </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
