import { useDescription, useTsController } from "@ts-react/form";
import React from "react";

const Option = ({
  label,
  index,
  setAnswers
}: {
  label: string;
  index: number;
  setAnswers: any;
  placeholder?: string;
}) => {
  const { field : { value = [], onChange }, error } = useTsController<string[]>();
  const { placeholder } = useDescription();
  const deleteAnswer = () => {
    const _updatedAnswers = value.filter((field, i) => i !== index);
    onChange(_updatedAnswers);
    setAnswers(_updatedAnswers);
  };
  return (
    <div className="m-3 w-full">
      <label className="font-mono p-2 text-sm"> {label} </label> <br />
      <input
        type="text"
        onChange={(e) => {
          const updatedAnswers = [
            ...value.slice(0, index),
            e.target.value,
            ...value.slice(index + 1),
          ];
          onChange(updatedAnswers);
        }}
        className="mt-2 p-2 rounded-md default:text-gray-50 w-3/4"
      />
      <span className="cursor-pointer" onClick={deleteAnswer}>
        {" "}
        Delete{" "}
      </span>
    </div>
  );
};

export const Options = ({ answers, setAnswers }: { answers: string[], setAnswers: any }) => {
  const { label } = useDescription();
  return (
    <div className="m-3 w-full">
      <label className="font-mono p-2 text-sm"> {label} </label> <br />
      {answers.map((answer, i) => (
        <Option label={answer} index={i} key={i} setAnswers={setAnswers} />
      ))}
    </div>
  );
};
