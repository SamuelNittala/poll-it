import { createTsForm } from "@ts-react/form";
import * as z from "zod";
import { Dropdown, TextField, ToogleText } from "../components";
import { DropDownSchema, ToggleTextSchema } from "./uniqueSchemas";

export const mapping = [
  [z.string(), TextField] as const,
  [DropDownSchema(""), Dropdown] as const,
  [ToggleTextSchema(""), ToogleText] as const
] as const;

export const PollForm = createTsForm(mapping);
export { DropDownSchema } from "./uniqueSchemas";
