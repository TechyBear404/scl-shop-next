"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import {
  type ProductsType,
  // type CategoriesType,
  type ProductType,
  getProducts,
  getCategories,
} from "~/server/db/requests";

// type ProdType =  ProductsType["data"]
interface State {
  // products: ProductType[];
  selectedProduct?: ProductType;
  // categories: CategoriesType;
}
// type CategoriesType = {
//   id: number;
//   name: string;
//   parentCatID: number | null;
//   count: number;
// }[];

type Actions = {
  type: "SET_PRODUCTS";
  payload: ProductType[];
};
// | {
//     type: "GET_PRODUCT";
//     payload: number;
//   };

export function dataReducer(state: State, action: Actions) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    // case "GET_PRODUCT":
    //   return {
    //     ...state,
    //     selectedProduct: state.products.find((p) => p.id === action.payload)!,
    //   };
    default:
      return state;
  }
}

export interface DataContextType {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

export const initialState: State = {
  selectedProduct: undefined,
};

export const DataContext = createContext<DataContextType>({
  state: {
    selectedProduct: undefined,
  },
  // Placeholder for dispatch function
  dispatch: () => {
    // Add dispatch logic here
  },
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const products = async () => {
      const newProducts = await getProducts();
      if (newProducts?.status === "success") {
        const data = newProducts.data;
        dispatch({ type: "SET_PRODUCTS", payload: data });
      }
      // const categories = await getCategories();
      // dispatch({ type: "SET_CATEGORIES", payload: categories });
    };
    void products();
  }, []);

  const value = { state, dispatch };
  // console.log("value", value);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
}
