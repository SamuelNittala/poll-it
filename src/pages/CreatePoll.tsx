import React from "react";
import * as z from "zod";
import { createTsForm } from "@ts-react/form";
import { TextField } from "../components";

const mapping = [[z.string(), TextField]];

const PollForm = createTsForm(mapping);

const PollFormSchema = z.object({
  title: z.string().describe("Title // Enter the title for the pole"),
});

export const CreatePoll = () => {
  return (
    <div className="bg-gray-400 p-5 mt-5 ml-auto mr-auto w-1/2">
      <PollForm
        schema={PollFormSchema}
        onSubmit={(data: z.infer<typeof PollFormSchema>) => {
          console.log(data);
        }}
        renderAfter={() => (
          <button type="submit" className="bg-red-300 p-2 m-2 align-middle">
            Submit
          </button>
        )}
      />
    </div>
  );
};
