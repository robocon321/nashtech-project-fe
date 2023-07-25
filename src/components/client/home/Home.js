import React, { useContext } from "react";

import { Helmet } from "react-helmet";

import BannerOne from "@components/client/home/BannerOne/index";
import BannerThree from "@components/client/home/BannerThree/index";
import BannerTwo from "@components/client/home/BannerTwo/index";
import FeatureCategory from "@components/client/home/FeatureCategories/index";
import Blogs from "@components/client/home/BlogSection/index";
import ProductModule from "@components/client/home/ProductSection/index";
import Services from "@components/client/home/Services/index";
import TabProducts from "@components/client/home/TabProducts/index";

import { ClientLayoutContext } from "@providers/client/ClientLayoutProvider";
import { HomeContext } from "@providers/client/HomeProvider";

import CategoryProductRow from "@components/client/home/CategoryProductRow/index";
import { AiTwotoneAudio } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';

const categoryColumnsOne = [
  {
    title: "PHONES & TABLETS",
    icon: <BsPhone />,
    image: "/images/banner-phone.jpg"
  },
  {
    title: "COMPUTER",
    icon: <FiMonitor />,
    image: "/images/banner-computer.jpg"
  },
]

const categoryColumnsTwo = [
  {
    title: "TV & CINEMA",
    icon: <AiTwotoneAudio />,
    image: "/images/banner-tv.jpg"
  },
  {
    title: "AUDIO",
    icon: <FiMonitor />,
    image: "/images/banner-audio.jpg"
  },
]



const Home = (props) => {
  const { t } =
    useContext(ClientLayoutContext);
  const { homeState } = useContext(HomeContext);

  return (
    <>
      <Helmet>
        <title>{t('home')}</title>
        <meta name="description" content={t('welcome_to')} />
      </Helmet>
      <BannerOne />
      <Services />
      <TabProducts />
      <BannerTwo />
      <CategoryProductRow categoryColumns={categoryColumnsOne} />
      <ProductModule products={homeState.phone_computer_products} />
      <CategoryProductRow categoryColumns={categoryColumnsTwo} />
      <ProductModule products={homeState.tv_camera_products} />
      <BannerThree />
      <FeatureCategory />
      <Blogs />
    </>
  );
};

export default Home;
