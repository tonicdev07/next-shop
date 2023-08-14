"use client"

import { ContextProvider } from "@/context/context";
import React, { FC, ReactNode } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HydrationProvider>
      <Client>
        <ContextProvider>{children}</ContextProvider>
      </Client>
    </HydrationProvider>
  );
};

export default Provider;
