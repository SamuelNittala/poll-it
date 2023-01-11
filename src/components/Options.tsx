import * as React from "react";
import { Error } from "./Error";
import { useTsController } from "@ts-react/form";

const Option = ({
  index,
  setAnswers,
  errorMessage,
}: {
  label: string;
  index: number;
  setAnswers: any;
  placeholder?: string;
  errorMessage: string;
}) => {
  const {
    field: { value = [], onChange },
  } = useTsController<string[]>();

  const deleteAnswer = () => {
    const _updatedAnswers = value.filter((_, i) => i !== index);
    onChange(_updatedAnswers);
    setAnswers(_updatedAnswers);
  };

  return (
    <div className="m-3 w-full">
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
      {index > 1 && (
        <span className="cursor-pointer" onClick={deleteAnswer}>
          Delete
        </span>
      )}
      {errorMessage && <Error message={errorMessage} />}
    </div>
  );
};

export const Options = ({
  answers,
  setAnswers,
  errors,
  label,
}: {
  answers: string[];
  setAnswers: any;
  errors: any;
  label: string;
}) => {
  const {
    field: { onChange },
  } = useTsController<string[]>();

  React.useEffect(() => {
    onChange(answers);
  }, [answers]);

  return (
    <div className="m-3 w-full">
      <label className="font-mono p-2 text-sm"> {label} </label> <br />
      {answers.map((answer, i) => (
        <Option
          label={answer}
          index={i}
          key={i}
          setAnswers={setAnswers}
          errorMessage={errors?.length > i ? errors[i]?.message : ""}
        />
      ))}
    </div>
  );
};
