import { useTsController } from "@ts-react/form";
import React from "react";

const Option = ({
  label,
  placeholder = "",
  index,
}: {
  label: string;
  index: number;
  placeholder?: string;
}) => {
  const { field, error } = useTsController<string[]>();
  return (
    <div className="m-3 w-full">
      <label className="font-mono p-2 text-sm"> {label} </label> <br />
      <input
        type="text"
        defaultValue={placeholder}
        onChange={(e) => {
          const updatedAnswers = [
            ...(field.value || []).slice(0, index),
            e.target.value,
            ...(field.value || []).slice(index + 1),
          ];
          field.onChange(updatedAnswers);
        }}
        className="mt-2 p-2 rounded-md default:text-gray-50 w-3/4"
      />
    </div>
  );
};

export const Options = ({ answers }: { answers: string[] }) => {
  return (
    <div className="m-3 w-full">
      {answers.map((answer, i) => (
        <Option label={answer} index={i} key={i} />
      ))}
    </div>
  );
};
