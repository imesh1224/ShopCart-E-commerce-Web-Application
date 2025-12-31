import Shop from "@/components/Shop";
import { getAllBrands, getCatogory } from "@/sanity/queries";
import React from "react";

const ShopPage = async () => {
  const categories = await getCatogory();
  const brands = await getAllBrands();

  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
};

export default ShopPage;
