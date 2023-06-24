import { ReactNode } from "react";

export type ButtonPrimaryProps = {
  children?: ReactNode;
  isLoading?: boolean;
  type?: "button" | "submit";
};
