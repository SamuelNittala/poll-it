import { createTsForm } from "@ts-react/form";
import * as z from "zod";
import {
  AddButton,
  Dropdown,
  Options,
  TextField,
  ToogleText,
} from "../components";
import {
  AddButtonSchema,
  DropDownSchema,
  OptionsSchema,
  ToggleTextSchema,
} from "./uniqueSchemas";

export const mapping = [
  [z.string(), TextField] as const,
  [DropDownSchema(""), Dropdown] as const,
  [ToggleTextSchema(""), ToogleText] as const,
  [OptionsSchema(""), Options] as const,
  [AddButtonSchema(""), AddButton] as const,
] as const;

export const PollForm = createTsForm(mapping);
export { DropDownSchema } from "./uniqueSchemas";
export { generateRefinedSchema } from "./generateRefinedSchema"
export type { DependencyFieldType } from "./generateRefinedSchema";
