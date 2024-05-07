"use client";

import { createContext, useReducer } from "react";
import type { ProductsType, CategoriesType } from "~/server/db/requests";

interface State {
  products: ProductsType;
  categories: CategoriesType;
}

type Actions =
  | {
      type: "SET_PRODUCTS";
      payload: ProductsType;
    }
  | {
      type: "SET_CATEGORIES";
      payload: CategoriesType;
    };

export function dataReducer(state: State, action: Actions) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export interface DataContextType {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

export const initialState: State = {
  products: [
    {
      id: 0,
      name: "name",
      catchPhrase: "catchPhrase",
      desc: "desc",
      tips: "tips",
      imgUrl: "imgUrl",
      category: 0 || null,
    },
  ],
  categories: [],
};

export const DataContext = createContext<DataContextType>({
  state: {
    products: [],
    categories: [],
  },
  // Placeholder for dispatch function
  dispatch: () => {
    // Add dispatch logic here
  },
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const value = { state, dispatch };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
