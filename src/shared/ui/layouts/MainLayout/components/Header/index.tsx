import React, { FC } from "react";
import {
  GoBackButton,
  HeaderBox,
  HeaderLogo,
  HeaderWrapper,
  LogoutButton,
  PageTitle,
  SubHeader,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({
  onClickBack,
  onClickLogo,
  onClickLogout,
  pageTitle,
}) => {
  return (
    <HeaderWrapper>
      <HeaderBox
        transition={{ ease: "easeIn" }}
        initial={{ y: -72 }}
        animate={{ y: 0 }}
      >
        <GoBackButton onClick={onClickBack}>
          <FontAwesomeIcon size="lg" icon={faChevronLeft} />
        </GoBackButton>
        {/* <HeaderLogo onClick={onClickLogo}>
          <Image alt="logo-image" src="/logo-small.svg" fill />
        </HeaderLogo> */}
        <LogoutButton onClick={onClickLogout}>
          <span>CERRAR SECIÓN</span>
          <FontAwesomeIcon size="lg" icon={faArrowRightFromBracket} />
        </LogoutButton>
      </HeaderBox>
      {pageTitle && (
        <SubHeader
          transition={{ ease: "easeIn" }}
          initial={{ y: -150 }}
          animate={{ y: 0 }}
        >
          <PageTitle>{pageTitle}</PageTitle>
        </SubHeader>
      )}
    </HeaderWrapper>
  );
};
