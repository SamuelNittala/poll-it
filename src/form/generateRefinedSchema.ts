import * as z from 'zod';

export type DependencyFieldType<T> = {
  field: keyof T;
  filters: Array<boolean>;
};

const getFilteredSchema = <T extends Record<string, any>>(
  fields: Array<DependencyFieldType<T>>
) => {
  const fieldsToHide = [];
  for (let i = 0; i < fields.length; ++i) {
    //if all filters does not pass, push to hide
    if (!fields[i].filters.every((filter) => filter)) {
      fieldsToHide.push(fields[i].field);
    }
  }
  return fieldsToHide;
};

const getSchema = <T extends object, K extends object>(
  filtersArray: Array<DependencyFieldType<T>>,
  fullSchema: K & { [key: string]: any }
): K => {
  const fieldsToHide = getFilteredSchema(filtersArray);
  const _res = Object.keys(fullSchema)
    .filter((field) => !fieldsToHide.includes(field))
    .reduce((acc, field) => {
      acc[field] = fullSchema[field];
      return acc;
    }, {} as any) as K;
  return _res as K;
};

export const generateRefinedSchema = <T extends Record<string, any>, K>(
  filtersArray: Array<DependencyFieldType<T>> | [],
  fullSchema: K & { [key: string]: any }
) => {
  const constructedSchema = getSchema(
    filtersArray,
    fullSchema
  ) as typeof fullSchema;
  return z.object(constructedSchema);
};

