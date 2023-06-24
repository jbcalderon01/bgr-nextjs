import { MainLayout } from "@/shared/ui/layouts/MainLayout";
import React, { ReactNode } from "react";

type LayoutDashboardProps = {
  children: ReactNode;
};

export default function LayoutDashboard({ children }: LayoutDashboardProps) {
  return <MainLayout>{children}</MainLayout>;
}
