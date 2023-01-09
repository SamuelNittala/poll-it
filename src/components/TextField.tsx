import { useDescription } from "@ts-react/form";
import React from "react";

type TextFieldProps = {
  type?: string;
};

export const TextField = ({ type = "text" }: TextFieldProps) => {
  const { label, placeholder} = useDescription();
  return (
    <div className="m-3 w-full">
      <label className="font-mono p-2 text-sm"> {label} </label> <br/> 
      <input type={type} defaultValue={placeholder} className="mt-2 p-2 rounded-md default:text-gray-50 w-3/4" />
    </div>
  );
}
