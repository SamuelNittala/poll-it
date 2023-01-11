import * as z from "zod";

export type DependencyFieldType<T> = {
  field: keyof T;
  filters: Array<boolean>;
};

export const generateRefinedSchema = <T extends Record<string, any>, K>(
  filtersArray: Array<DependencyFieldType<T>> | [],
  fullSchema: K & { [key: string]: any }
) => {

  const fieldsToHide: string[] = [];
  for (let i = 0; i < filtersArray.length; ++i) {
    //if all filters does not pass, push to hide
    if (!filtersArray[i].filters.every((filter) => filter)) {
      fieldsToHide.push(String(filtersArray[i].field));
    }
  }

  const _res = Object.keys(fullSchema)
    .filter((field) => !fieldsToHide.includes(field))
    .reduce((acc, field) => {
      acc[field] = fullSchema[field];
      return acc;
    }, {} as any) as typeof fullSchema;

  return z.object(_res);
};
