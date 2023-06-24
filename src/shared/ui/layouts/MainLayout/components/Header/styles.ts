"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const HeaderBox = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  box-shadow: 0px 0px 16px #4676c329;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  height: 72px;
  align-items: center;
  z-index: 3;
  position: relative;
`;

export const HeaderWrapper = styled.div``;

export const GoBackButton = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const LogoutButton = styled.div`
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.darkPrimary};
  > span {
    font-weight: bold;
    margin-right: 6px;
  }
  & ::after {
    content: "";
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkPrimary};
    padding: 0;
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0;
    transition: 0.3s;
  }
  & :hover::after {
    width: 100%;
    padding: 0;
  }
`;

export const HeaderLogo = styled.div`
  position: absolute;
  width: 50.55px;
  height: 32px;
  top: 15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
`;

export const SubHeader = styled(motion.div)`
  padding: 24px;
  box-shadow: 0px 0px 16px #4676c329;
  background-color: ${({ theme }) => theme.colors.white};
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
`;

export const PageTitle = styled.p`
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkPrimary};
  font-size: ${({ theme }) => theme.fontSize["1x"]};
`;
