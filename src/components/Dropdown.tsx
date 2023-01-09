import { useDescription, useTsController } from "@ts-react/form";
import React, { useId } from "react";

type DropDownOptionsType = Array<{ value: string; label: string }>;

export const Dropdown = ({ options }: { options: DropDownOptionsType }) => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  const id = useId();
  return (
    <div className="w-full">
      <label className="font-mono p-2 ml-3 mt-4 text-sm"> {label} </label>
      <br />
      <select
        className="m-2 p-2"
        value={field.value ? field.value : "none"}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
      >
        {!field.value && <option value="none">Select an option</option>}
        {options.map((e, i) => (
          <option key={id + "-" + i} value={e.value} className="p-2">
            {e.label}
          </option>
        ))}
      </select>
      <span className="text-red-500">
        {error?.errorMessage && error.errorMessage}
      </span>
      <br />
    </div>
  );
};
