"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

type DataType = {
  display: string;
  idName: string;
  type: string;
  value?: string | number;
};

export default function InputForm({ data }: { data: DataType }) {
  const [inputValue, setInputValue] = useState<DataType>();
  // const { pending } = useFormStatus();

  useEffect(() => {
    // if (data.value) {
    setInputValue(data);
    // }
  }, [data]);

  if (inputValue) {
    if (data.type === "textarea") {
      return (
        <>
          <label htmlFor={inputValue.idName}>{inputValue.display}</label>
          <textarea
            id={inputValue.idName}
            value={inputValue.value}
            onChange={(e) => {
              setInputValue({ ...inputValue, value: e.target.value });
            }}
            name={inputValue.idName}
            className="w-full rounded-md border border-gray-300 p-2"
          />
        </>
      );
    }

    return (
      <>
        <label htmlFor={inputValue.idName}>{inputValue.display}</label>
        <input
          type={inputValue.type}
          id={inputValue.idName}
          name={inputValue.idName}
          value={inputValue.value}
          className="w-full rounded-md border border-gray-300 p-2"
          onChange={(e) => {
            setInputValue({ ...inputValue, value: e.target.value });
          }}
        />
      </>
    );
  }
}
