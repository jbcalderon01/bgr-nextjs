"use client";

import { styled } from "styled-components";

export const ButtonStyled = styled.button`
  height: 46px;
  width: 100%;
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  border-radius: 28px;
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.button.textSolid};
  font-weight: bold;
  border: 1px solid transparent;
  outline: none;
  cursor: pointer;
  transition: 0.1s;
  &:active {
    transform: scale(0.95);
  }
`;
