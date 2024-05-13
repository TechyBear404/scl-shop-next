"use client";

import { useEffect, useState } from "react";

type DataType = {
  display: string;
  idName: string;
  type: string;
  value?: string | number;
};

export default function InputForm({
  data,
  error,
}: {
  data: DataType;
  error?: string[] | undefined;
}) {
  const [inputValue, setInputValue] = useState<DataType>({
    display: "",
    idName: "",
    type: "",
    value: "",
  });
  // const { pending } = useFormStatus();

  useEffect(() => {
    // if (data.value) {
    setInputValue((prev) => ({ ...prev, ...data }));
    // }
  }, [data]);

  if (inputValue) {
    if (data.type === "textarea") {
      return (
        <>
          <label className="font-semibold" htmlFor={inputValue.idName}>
            {inputValue.display}
          </label>
          <textarea
            id={inputValue.idName}
            value={inputValue.value}
            onChange={(e) => {
              setInputValue({ ...inputValue, value: e.target.value });
            }}
            name={inputValue.idName}
            className="w-full rounded-md border border-gray-300 p-2"
          />
          <ul className="">
            {error
              ? error.map((err, index) => (
                  <li key={index} className="text-red-500">
                    {err}
                  </li>
                ))
              : ""}
          </ul>
        </>
      );
    }

    return (
      <>
        <label className="font-semibold" htmlFor={inputValue.idName}>
          {inputValue.display}
        </label>
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
        <ul className="">
          {error
            ? error.map((err, index) => (
                <li key={index} className="text-red-500">
                  {err}
                </li>
              ))
            : ""}
        </ul>
      </>
    );
  }
}
