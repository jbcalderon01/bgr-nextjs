"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
  padding: 0 24px;
`;

export const ModuleList = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 10rem;
`;

export const ModuleBox = styled.div`
  width: 136px;
  cursor: pointer;
  transition: 0.2s;
  & :hover {
    transition: 0.2s;
    transform: scale(1.05);
  }
`;

export const ModuleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px #4676c329;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 22px;
  width: 136px;
  height: 136px;
  transition: 0.2s;
`;

export const ModuleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  margin-top: 16px;
  color: ${({ theme }) => theme.text.secondary};
  transition: 0.2s;
`;

export const ModuleIcon = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;
