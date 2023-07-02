"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LoginGrid = styled(motion.div)`
  display: grid;
  height: 100%;
  grid-template-columns: 427px calc(100% - 427px);
`;

export const LoginGradientSection = styled(motion.div)`
  background: transparent linear-gradient(330deg, #9fecff 0%, #4196e0 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 5px -5px 10px #0044c30d;
  border-radius: 0px 0px 200px 0px;
  width: 427px;
  height: 100%;
  position: relative;
`;

export const GirlFlyWrapper = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 528.62px;
  max-height: 688.51px;
  top: 50%;
  transform: translateY(-50%);
`;

export const FlyStar = styled.div`
  height: 100%;
  width: 528.62px;
  max-height: 688.51px;
  position: absolute;
  transform: translateX(-1%) translateY(-4%);
`;

export const LoginFormBox = styled(motion.div)`
  display: flex;
  align-items: center;
  max-width: 296px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

export const LoginFormCard = styled.form`
  width: 100%;
`;

export const FormTitle = styled.p`
  margin-top: 54px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize["1x"]};
`;

export const BoxFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BoxButtons = styled.div`
  margin-top: 24px;
`;

export const ButtonForgotPassword = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.xs};
  width: 100%;
  color: ${({ theme }) => theme.colors.navyBlue};
  cursor: pointer;
  margin-top: 24px;
  &:hover {
    text-decoration: underline;
  }
`;
