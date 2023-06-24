import React, { FC } from "react";
import { AuthLayoutProps } from "./AuthLayout.types";
import { AuthLayoutWrapper } from "./AuthLayout.styles";

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
};
