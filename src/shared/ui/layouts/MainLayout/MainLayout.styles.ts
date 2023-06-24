"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

type LayoutGridProps = {
  $hasSubMenu: boolean;
};

export const LayoutGrid = styled.div<LayoutGridProps>`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${({ $hasSubMenu }) => ($hasSubMenu ? "144px" : "72px")} calc(
      100% - ${({ $hasSubMenu }) => ($hasSubMenu ? "144px" : "72px")}
    );
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgrounds.primary};
`;

export const ChildrenBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
