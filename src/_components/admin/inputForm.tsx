"use client";

import { useEffect, useState } from "react";

type DataType = {
  display: string;
  idName: string;
  type: string;
  value?: string | number;
};

export default function InputForm({ data }: { data: DataType }) {
  const [inputValue, setInputValue] = useState<DataType>({
    value: "",
    idName: "",
    type: "",
    display: "",
  });

  useEffect(() => {
    if (data.value) {
      setInputValue(data);
    }
  }, [data.value]);

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
          className="w-full"
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
        className="w-full"
        onChange={(e) => {
          setInputValue({ ...inputValue, value: e.target.value });
        }}
      />
    </>
  );
}
