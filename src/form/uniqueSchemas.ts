import { createUniqueFieldSchema } from "@ts-react/form";
import * as z from 'zod';

export const DropDownSchema = (label) => createUniqueFieldSchema(
  z.string().describe(`${label}`),
  "dropDownField"
);

export const ToggleTextSchema = (label) => createUniqueFieldSchema(
  z.boolean().describe(`${label}`),
  "toggleText"
);

export const OptionsSchema = (label) => createUniqueFieldSchema(
  z.string().describe(`${label}`),
  "optionsField"
)
