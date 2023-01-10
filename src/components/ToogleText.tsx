import { useDescription, useTsController } from "@ts-react/form";
import React from "react";

export const ToogleText = () => {
  const { field } = useTsController<boolean>();
  const { label, placeholder } = useDescription();
  return (
    <div className="w-full m-3">
      <a
        onClick={() => field.onChange(!field.value)}
        className="underline text-purple-500 cursor-pointer hover:text-black"
      >
        {" "}
        {field.value ? placeholder : label }{" "}
      </a>
    </div>
  );
};
