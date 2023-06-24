import React, { FC } from "react";
import { ButtonPrimaryProps } from "./types";
import { ButtonStyled } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  children,
  isLoading,
  type = "button",
}) => {
  return (
    <ButtonStyled type={type}>
      {!isLoading ? (
        children
      ) : (
        <FontAwesomeIcon spin size="lg" icon={faSpinner} />
      )}
    </ButtonStyled>
  );
};
