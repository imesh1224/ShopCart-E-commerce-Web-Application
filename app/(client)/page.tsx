import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import React from "react";
import ProductGrid from "../../components/ProductGrid";
import HomeCategory from "@/components/HomeCategory";
import { getCatogory } from "@/sanity/queries";
import ShopByBrands from "@/components/ShopByBrands";
import LatestBlog from "@/components/LatestBlog";

const Home = async () => {
  const categories = await getCatogory(6);

  return (
    <Container className="">
      <HomeBanner />
      <ProductGrid />
      <HomeCategory categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;
