import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DropDownSchema, PollForm } from "../form";
import { AddButtonSchema, OptionsSchema, ToggleTextSchema } from "../form/uniqueSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

type FieldProperties<T> = {
  visible: boolean;
  zodValue: any;
  key: keyof T;
};

const ConstructSchema = <T extends Record<string, any>>(
  fields: Array<FieldProperties<T>>
) => {
  const _res = fields
    .filter((field) => field.visible)
    .reduce((acc, field) => {
      const { key, zodValue } = field;
      acc[key] = zodValue();
      return acc;
    }, {} as T);
  return z.object(_res) as any;
};

// default schema with all the values.
const PollFormSchema = z.object({
  title: z
    .string()
    .min(10, "Minimum 10 characters")
    .describe("Title // enter title"),
  showDescription: ToggleTextSchema("Show Description // Hide Description"),
  description: z.string().optional().describe("Description (optional)"),
  votingType: DropDownSchema("Voting Type"),
  options: OptionsSchema("Answer Options // your option"),
  addButton: AddButtonSchema("Add Answer"),
});

type PollFormFieldValues = z.infer<typeof PollFormSchema>;

export const CreatePoll = () => {
  const form = useForm<PollFormFieldValues>({
    resolver: zodResolver(PollFormSchema),
  });

  const [answers, setAnswers] = React.useState(['Answer-1', 'Answer-2']);

  const addAnswer = React.useCallback(() => {
    setAnswers(prev => [...prev, `Answer-${prev.length + 1}`]);
  }, []);

  const showDescription = form.watch("showDescription");

  const PollFormFields: FieldProperties<PollFormFieldValues>[] = [
    {
      key: "title",
      visible: true,
      zodValue: () =>
        z
          .string()
          .min(10, "Minimum 10 characters")
          .describe("Title // enter title"),
    },
    {
      key: "showDescription",
      visible: true,
      zodValue: () => ToggleTextSchema("Show Description // Hide Description"),
    },
    {
      key: "description",
      visible: showDescription,
      zodValue: () => z.string().optional().describe("Description (optional)"),
    },
    {
      key: "votingType",
      visible: true,
      zodValue: () => DropDownSchema("Voting Type"),
    },
    {
      key: "options",
      visible: true,
      zodValue: () => OptionsSchema("Answer Options // your option")
    },
    {
      key: "addButton",
      visible: true,
      zodValue: () => AddButtonSchema("Add Answer"),
    }
  ];

  const RefinedSchema = ConstructSchema(PollFormFields);

  console.log(RefinedSchema, 'rarar');

  const handleSubmit = (data: PollFormFieldValues) => {
    console.log(data, "data");
  };

  return (
    <div className="bg-gray-200 p-5 mt-5 ml-auto mr-auto w-1/2 rounded-md">
      <PollForm
        schema={RefinedSchema}
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
              { label: "Image Poll", value: "images" },
              { label: "Meeting Poll", value: "meeting" },
            ],
          },
          options: {
            answers: answers,
            setAnswers: setAnswers,
          },
          addButton: {
            addAnswer: addAnswer,
          } 
        }}
      />
    </div>
  );
};
