"use client";

import UpdateProduct from "~/app/admin/_components/updateProduct";
import CreateProduct from "~/app/admin/_components/createProduct";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TabButton from "./tabButton";
import type { CategoriesType } from "~/types/types";

export default function TabOperations() {
  const [activeTab, setActiveTab] = useState(1);
  const params = useSearchParams();
  const selected = params.get("selected");

  useEffect(() => {
    if (selected) {
      setActiveTab(2);
    }
  }, [selected]);

  return (
    <div className="top-18 fixed right-6 z-20 flex w-96 flex-col rounded-md">
      <div className="flex justify-between  text-2xl font-bold text-rose-50 ">
        <TabButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tab={{ id: 1, name: "Ajouter" }}
        />
        <TabButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tab={{ id: 2, name: "Modifier" }}
        />
      </div>
      <div className="rounded-b-md border border-t-0 border-rose-800">
        {activeTab === 1 && <CreateProduct />}
        {activeTab === 2 && <UpdateProduct />}
      </div>
    </div>
  );
}
