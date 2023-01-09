import React from "react";

export const Error = ({ message }: { message: string | undefined }) => {
  return <p className="text-red-600 p-2">{message || ''}</p>;
};
