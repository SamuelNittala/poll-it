import { createTsForm } from "@ts-react/form";
import * as z from "zod";
import { Dropdown, TextField } from "../components";
import { DropDownSchema } from "./uniqueSchemas";

export const mapping = [
  [z.string(), TextField] as const,
  [DropDownSchema(""), Dropdown] as const,
] as const;

export const PollForm = createTsForm(mapping);
export { DropDownSchema } from "./uniqueSchemas";
