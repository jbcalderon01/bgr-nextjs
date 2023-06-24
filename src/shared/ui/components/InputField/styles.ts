"use client";

import { css, styled } from "styled-components";

export const InputStyled = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.md};
  height: 100%;
  margin-top: 8px;
  color: ${({ theme }) => theme.input.textSolid};
`;

type TInputLabel = {
  $isFocused?: boolean;
  $hasValue?: boolean;
};

export const InputLabel = styled.label<TInputLabel>`
  color: ${({ theme }) => theme.input.textLabel};
  font-size: ${({ theme }) => theme.fontSize.md};
  position: absolute;
  top: 16px;
  bottom: 0;
  height: max-content;
  transition: 0.2s;
  pointer-events: none;
  ${({ $isFocused, theme, $hasValue }) =>
    ($isFocused || $hasValue) &&
    `
    top: 8px;
    font-size: ${theme.fontSize.xs};
  `}
`;

type TInputWrapper = {
  $hasError?: boolean;
  $hasLabel?: boolean;
};

export const InputWrapper = styled.div<TInputWrapper>`
  position: relative;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.input.background};
  border-radius: 8px;
  border: 1px solid transparent;
  height: 56px;
  box-shadow: ${({ theme }) => theme.input.boxShadow};
  ${({ $hasLabel }) =>
    !$hasLabel &&
    css`
      ${InputStyled} {
        margin-top: 0px;
      }
    `}

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      border: 1px solid ${theme.colors.error};
      ${InputStyled} {
        color: ${theme.colors.error};
      }
      ${InputLabel} {
        color: ${theme.colors.error};
      }
    `}
`;
