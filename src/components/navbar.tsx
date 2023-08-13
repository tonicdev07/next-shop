"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

import Link from "next/link";
import { ProductType } from "@/interfaces";
import { useCountContext } from "@/app/context";
interface CountContextType {
  count: [ProductType[]];
}
const Navbar = () => {
  const [show, setShow] = useState(false);
  const count = useCountContext() as CountContextType;

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="flex w-full md:w-min title-font font-medium items-center justify-between  text-white md:mb-0">
          <Link className="flex items-center" href={"/"}>
            <Image alt="logo-brand" height={40} placeholder="blur" src={logo} />
            <span className=" text-xl">TonicDev</span>
          </Link>
          <button
            onClick={() => setShow((prew) => !prew)}
            className="flex sm:hidden button border px-1  cursor-pointer hover:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </a>
        <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-white">
            Home
          </Link>
          <Link href={"/products"} className="mr-5 hover:text-white">
            Products
          </Link>
          <Link className=" relative" href={"/shopping-cart"}>
            <span className=" absolute right-0 bottom-4 text-[10px] bg-green-400 h-3 w-3 text-center justify-center rounded-2xl  flex items-center text-black">
              {count.count.length}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
        </nav>
        <div className="mt-1 block md:hidden ">
          <nav
            className={`${
              show ? "sm:flex" : "hidden"
            } flex-wrap  items-center text-base justify-center`}
          >
            <Link href={"/"} className="mr-5 hover:text-white">
              Home
            </Link>
            <Link href={"/products"} className="mr-5 hover:text-white">
              Products
            </Link>
            <Link className=" inline-block " href={"/shopping-cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
