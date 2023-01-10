import { useDescription } from "@ts-react/form";
import React from "react";

export const AddButton = ( { addAnswer } : { addAnswer : any}) => {
  const { label } = useDescription();
  return (
    <div className="m-3 w-full">
      <button type="button" onClick={addAnswer} className="text-sm bg-red-100 p-2 rounded-md">{label}</button>
    </div>
  );
};
