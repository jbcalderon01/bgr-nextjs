"use client";

import React, { FC } from "react";
import { MainLayoutProps } from "./MainLayout.types";
import { Header } from "./components";
import { usePathname, useRouter } from "next/navigation";
import { ChildrenBox, LayoutGrid } from "./MainLayout.styles";

const SUB_HEADERS: Record<string, string> = {
  "/admin": "dashboard",
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();
  const pageTitle = SUB_HEADERS[pathName];
  return (
    <LayoutGrid $hasSubMenu={!!pageTitle}>
      <Header
        onClickBack={() => router.back()}
        onClickLogo={() => router.push("/admin")}
        onClickLogout={() => router.push("/")}
        pageTitle={pageTitle}
      />
      <ChildrenBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {children}
      </ChildrenBox>
    </LayoutGrid>
  );
};
