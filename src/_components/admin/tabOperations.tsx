"use client";

import UpdateProduct from "~/_components/admin/updateProduct";
import CreateProduct from "~/_components/admin/createProduct";
import { useState } from "react";
import type { Doc, DocInsert } from "~/server/db/schema/dbTypes";

type ProductType = Doc<"products">;

export default function TabOperations({
  products,
}: {
  products: ProductType[];
}) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="mt-16 flex flex-col rounded-md">
      <div className="flex justify-between  text-2xl font-bold text-rose-50 ">
        <button
          className={`${activeTab === 1 ? "border-rose-800 bg-rose-800" : "mt-1 border-rose-950 border-b-rose-100/50 bg-rose-950 text-rose-50/50"} grow rounded-t-md border-2 p-2 transition duration-200 ease-in-out`}
          onClick={() => setActiveTab(1)}
        >
          Ajouter
        </button>
        <button
          className={`${activeTab === 2 ? "border-rose-800 bg-rose-800" : "mt-1 border-rose-950 border-b-rose-100/50 bg-rose-950 text-rose-50/50"} grow rounded-t-md border-2 p-2 transition duration-200  ease-in-out`}
          onClick={() => setActiveTab(2)}
        >
          Modifier
        </button>
      </div>
      <div className="rounded-b-md border border-t-0 border-rose-800">
        {activeTab === 1 && <CreateProduct />}
        {activeTab === 2 && <UpdateProduct products={products} />}
      </div>
    </div>
  );
}
