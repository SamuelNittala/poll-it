import React from "react";
import * as z from "zod";
import { DropDownSchema, PollForm } from "../form";

const PollFormSchema = z.object({
  title: z
    .string()
    .min(10, "Minimum 10 characters")
    .describe("Title // enter title"),
  votingType: DropDownSchema("Voting Type"),
});

export const CreatePoll = () => {
  const handleSubmit = (data: z.infer<typeof PollFormSchema>) => {
    console.log(data, "data");
  };
  return (
    <div className="bg-gray-400 p-5 mt-5 ml-auto mr-auto w-1/2 rounded-md">
      <PollForm
        schema={PollFormSchema}
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
        }}
      />
    </div>
  );
};
