import React from "react";
import {
  DashboardWrapper,
  ModuleBox,
  ModuleCard,
  ModuleIcon,
  ModuleList,
  ModuleTitle,
} from "./Dashboard.styles";
import Image from "next/image";
import { APP_MODULES } from "@/shared/constants";
import Link from "next/link";

export const DashboardView = () => {
  return (
    <DashboardWrapper>
      <ModuleList
        transition={{ ease: "easeIn" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {APP_MODULES.map((module, index) => (
          <Link key={module.path} href={module.path}>
            <ModuleBox>
              <ModuleCard>
                <ModuleIcon>
                  <Image alt={module.icon} fill src={module.icon} />
                </ModuleIcon>
              </ModuleCard>
              <ModuleTitle>{module.title}</ModuleTitle>
            </ModuleBox>
          </Link>
        ))}
      </ModuleList>
    </DashboardWrapper>
  );
};
