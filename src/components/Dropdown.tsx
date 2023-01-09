import { useDescription, useTsController } from "@ts-react/form";
import React, { useId } from "react";

type DropDownOptionsType = Array<{ value: string; label: string }>;

export const Dropdown = ({ options }: { options: DropDownOptionsType }) => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  const id = useId();
  return (
    <div className="w-full m-3">
      <label className="font-mono p-2 text-sm"> {label} </label>
      <br />
      <select
        className="mt-2 p-2 rounded-md w-1/2"
        value={field.value ? field.value : "none"}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
      >
        {!field.value && <option value="none" className="p-2 m-2">Select an option</option>}
        {options.map((e, i) => (
          <option key={id + "-" + i} value={e.value} className="p-2 m-2">
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
