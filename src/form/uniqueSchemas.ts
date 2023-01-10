import { createUniqueFieldSchema } from "@ts-react/form";
import * as z from 'zod';

export const DropDownSchema = (label) => createUniqueFieldSchema(
  z.string().describe(`${label}`),
  "dropDownField"
);

export const ToggleTextSchema = (label) => createUniqueFieldSchema(
  z.boolean().optional().describe(`${label}`),
  "toggleText"
);

export const OptionsSchema = (label) => createUniqueFieldSchema(
  z.string().array().optional().describe(`${label}`),
  "optionsField"
)

export const AddButtonSchema = (label) => createUniqueFieldSchema(
  z.boolean().optional().describe(`${label}`),
  "addButtonField"
)
