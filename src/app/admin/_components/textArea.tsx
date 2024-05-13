"use client";
import { useRef } from "react";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";

export function TextArea() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [val, setVal] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [val]);

  return (
    <>
      <label htmlFor="textArea">Text Area</label>
      <textarea
        className="rounded border border-rose-300 border-opacity-70 bg-white p-1 focus:outline-none active:outline-none"
        placeholder="type something here"
        value={val}
        onChange={handleChange}
        rows={2}
        ref={textAreaRef}
      ></textarea>
    </>
  );
}
