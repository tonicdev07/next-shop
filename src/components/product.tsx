"use client";

import React, { FC } from "react";
import { ProductType } from "../interfaces";
import Link from "next/link";
import CustomImage from "./image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <section className="body-font my-3">
      <Link href={`/product/${product.id}`}>
      <div className=" max-w-[234px] md:max-w-[240px] lg:max-w-[230px]  mx-auto rounded-md  hover:scale-105 transition-transform ease-out duration-200 border border-cyan-400 p-1  flex flex-wrap ">
        <div className=" flex flex-col  h-[400px]  ">
          <a className=" relative flex-1 ">
            <CustomImage product={product} fill/>
          </a>
          <div className="pt-4 max-w-sm sm:py-1 px-2 rounded-md my-1 shadow-xl bg-[#e5e9eb]">
            <h1 className="text-gray-500   text-left text-sm  mb-1">
              {product.category}
            </h1>
            <div className="  text-md leading-5 text-left line-clamp-1 my-2 text-slate-600 font-bold">
              {product.title}
            </div>
            <h3 className=" text-gray-700  line-clamp-3 text-left   text-sm font-medium">
              {product.description}
            </h3>
            <p className="py-2 text-left font-sans font-bold text-gray-600">
              {product.price}$
            </p>
          </div>
        </div>
      </div>
      </Link>
    </section>
  );
};

export default Product;
