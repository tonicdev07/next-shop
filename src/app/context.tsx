"use client";

import { ProductType } from "@/interfaces";
import { FC, ReactNode, createContext, useContext, useState } from "react";

const Context = createContext({});

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};

export const useCountContext = () => useContext(Context);
