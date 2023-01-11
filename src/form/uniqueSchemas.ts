import { createUniqueFieldSchema } from "@ts-react/form";
import * as z from "zod";

export const DropDownSchema = (label: string) =>
  createUniqueFieldSchema(z.string().describe(`${label}`), "dropDownField");

export const ToggleTextSchema = (label: string) =>
  createUniqueFieldSchema(
    z.boolean().optional().describe(`${label}`),
    "toggleText"
  );

export const OptionsSchema = (label: string) =>
  createUniqueFieldSchema(
    z.string().min(5, "Minimum 5 characters").array().describe(`${label}`),
    "optionsField"
  );

export const AddButtonSchema = (label: string) =>
  createUniqueFieldSchema(
    z.boolean().optional().describe(`${label}`),
    "addButtonField"
  );
