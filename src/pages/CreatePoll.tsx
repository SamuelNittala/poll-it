import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DropDownSchema, PollForm } from "../form";
import {
  AddButtonSchema,
  OptionsSchema,
  ToggleTextSchema,
} from "../form/uniqueSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

type PollFormValues = {
  showDescription: boolean;
  description?: string;
  title: string;
  votingType: string;
  options: Array<string>;
  addButton: string;
};

type DependencyFieldType<T> = {
  field: keyof T;
  filters: Array<boolean>;
};

const getFilteredSchema = <T extends Record<string, any>>(
  fields: Array<DependencyFieldType<T>>
) => {
  const fieldsToHide = [];
  for (let i = 0; i < fields.length; ++i) {
    //if all filters does not pass, push to hide
    if (!fields[i].filters.every((filter) => filter)) {
      fieldsToHide.push(fields[i].field);
    }
  }
  return fieldsToHide;
};

const getSchema = <T extends object, K extends object>(
  filtersArray: Array<DependencyFieldType<T>>,
  fullSchema: K & { [key: string]: any }
): K => {
  const fieldsToHide = getFilteredSchema(filtersArray);
  const _res = Object.keys(fullSchema)
    .filter((field) => !fieldsToHide.includes(field))
    .reduce((acc, field) => {
      acc[field] = fullSchema[field];
      return acc;
    }, {} as any) as K;
  return _res as K;
};

const fullSchema = {
  title: z
    .string()
    .min(5, "Minimum 5 characters")
    .describe("Title // enter title"),
  showDescription: ToggleTextSchema("Show Description // Hide Description"),
  description: z
    .string()
    .min(5, "Minimum 5 characters")
    .optional()
    .describe("Description (optional)"),
  votingType: DropDownSchema("Voting Type"),
  options: OptionsSchema("Answer Options // your option"),
  addButton: AddButtonSchema("Add Answer"),
};

export const PollFormSchema = <T extends Record<string, any>>(
  filtersArray: Array<DependencyFieldType<T>> | []
) => {
  const fullSchema = {
    title: z
      .string()
      .min(5, "Minimum 5 characters")
      .describe("Title // enter title"),
    showDescription: ToggleTextSchema("Show Description // Hide Description"),
    description: z
      .string()
      .min(5, "Minimum 5 characters")
      .optional()
      .describe("Description (optional)"),
    votingType: DropDownSchema("Voting Type"),
    options: OptionsSchema("Answer Options // your option"),
    addButton: AddButtonSchema("Add Answer"),
  };
  const constructedSchema = getSchema(
    filtersArray,
    fullSchema
  ) as typeof fullSchema;

  return z.object(constructedSchema);
};

type PollFormFieldValues = z.infer<ReturnType<typeof PollFormSchema>>;

const _pollSchema = z.object(fullSchema);

export const CreatePoll = () => {
  const [answers, setAnswers] = React.useState(["", ""]);
  const addAnswer = React.useCallback(() => {
    setAnswers((prev) => [...prev, ""]);
  }, []);

  const form = useForm<PollFormFieldValues>({
    resolver: zodResolver(PollFormSchema([])),
  });

  const showDescription = form.watch("showDescription");
  const options = form.watch("votingType");

  const handleSubmit = (data: PollFormFieldValues) => {
    console.log(data, "data");
  };

  const dependencies: Array<DependencyFieldType<PollFormValues>> = [
    {
      field: "description",
      filters: [showDescription],
    },
    {
      field: "options",
      filters: [options === "multi"],
    },
  ];

  return (
    <div className="bg-gray-200 p-5 mt-5 ml-auto mr-auto sm:w-full md:w-1/2 rounded-md">
      <PollForm
        schema={PollFormSchema(dependencies)}
        form={form}
        onSubmit={handleSubmit}
        renderAfter={() => (
          <button
            type="submit"
            className="bg-red-300 p-2 m-2 align-middle hover:text-green-500 rounded-md"
          >
            Submit
          </button>
        )}
        props={{
          votingType: {
            options: [
              { label: "Multiple Choice", value: "multi" },
              // { label: "Image Poll", value: "images" },
              // { label: "Meeting Poll", value: "meeting" },
            ],
          },
          options: {
            answers: answers,
            setAnswers: setAnswers,
            errors: form.formState.errors?.["options"],
            label: "Your answers",
          },
          addButton: {
            addAnswer: addAnswer,
            label: "Add Answer",
          },
        }}
      />
    </div>
  );
};
