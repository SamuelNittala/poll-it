import { useDescription, useTsController } from "@ts-react/form";
import { Error } from "./Error";
import React from "react";

type TextFieldProps = {
  type?: string;
};

export const TextField = ({ type = "text" }: TextFieldProps) => {
  const { label, placeholder } = useDescription();
  const { field, error } = useTsController<string>();
  return (
    <div className="m-3 w-full">
      <label className="font-mono p-2 text-sm"> {label} </label> <br />
      <input
        type={type}
        value={field.value ? field.value : placeholder}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
        className="mt-2 p-2 rounded-md default:text-gray-50 w-3/4"
      />
      {error?.errorMessage && (
        <Error message={error?.errorMessage} />
      )}
    </div>
  );
};
