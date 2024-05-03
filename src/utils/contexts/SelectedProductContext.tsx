"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { createContext, useContext, useState } from "react";

interface SelectedProductType {
  id: string;
  name: string;
  catchPhrase: string;
  desc: string;
  tips: string;
  imgUrl: string;
}

const ProductContext = createContext<object>({
  id: "",
  name: "",
  catchPhrase: "",
  desc: "",
  tips: "",
  imgUrl: "",
});

type Props = {
  children: React.ReactNode;
};
export default function ProductProvider({ children }: Props) {
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <ProductContext.Provider value={[selectedProduct, setSelectedProduct]}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
