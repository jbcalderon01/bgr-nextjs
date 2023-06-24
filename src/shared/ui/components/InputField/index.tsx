/* eslint-disable react/display-name */
"use client";

import React, { ChangeEvent, FC, FocusEventHandler, useState } from "react";
import { InputFieldProps } from "./types";
import { InputLabel, InputStyled, InputWrapper } from "./styles";

export const InputField = React.forwardRef<any, InputFieldProps>(
  ({ error, name, label, placeholder, type, onChange, onBlur }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange && onChange(e);
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      onBlur && onBlur(e);
      setIsFocused(false);
    };

    return (
      <InputWrapper $hasLabel={!!label} $hasError={error}>
        {label && (
          <InputLabel $hasValue={!!inputValue} $isFocused={isFocused}>
            {label}
          </InputLabel>
        )}
        <InputStyled
          type={type}
          ref={ref}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={() => setIsFocused(true)}
        />
      </InputWrapper>
    );
  }
);
