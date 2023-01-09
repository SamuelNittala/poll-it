import { createUniqueFieldSchema } from "@ts-react/form";
import * as z from 'zod';

export const DropDownSchema = (label) => createUniqueFieldSchema(
  z.string().describe(`${label}`),
  "dropDownField"
);
