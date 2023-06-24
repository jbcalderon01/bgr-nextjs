"use client";

import React, { useState } from "react";
import {
  BoxButtons,
  BoxFields,
  ButtonForgotPassword,
  FlyStar,
  FormTitle,
  GirlFlyWrapper,
  ImageWrapper,
  LoginContainer,
  LoginFormBox,
  LoginFormCard,
  LoginGradientSection,
  LoginGrid,
} from "./Login.styles";
import Image from "next/image";
import { ButtonPrimary, InputField } from "@/shared/ui";
import { motion } from "framer-motion";
import {
  FadeInRight,
  GirlFlyAnimation,
  LoginBoxRightAnimation,
  LoginInitAnimation,
} from "./Login.animation";
import { useLoginState } from "./Login.states";

export const LoginView = () => {
  const { formErrors, formRegister, handleSubmit, isLogged } = useLoginState();

  return (
    <LoginContainer>
      <LoginGrid>
        <LoginGradientSection
          animate={isLogged ? "finish" : "init"}
          {...FadeInRight}
        >
          <GirlFlyWrapper {...GirlFlyAnimation}>
            <Image
              style={{ zIndex: 2 }}
              src="/girl-fly.png"
              fill
              alt="girl-fly"
            />
            <FlyStar>
              <Image src="/login-star.svg" fill alt="girl-fly" />
            </FlyStar>
          </GirlFlyWrapper>
        </LoginGradientSection>
        <motion.div
          animate={isLogged ? "finish" : "init"}
          {...LoginInitAnimation}
        >
          <LoginFormBox {...LoginBoxRightAnimation}>
            <LoginFormCard onSubmit={handleSubmit}>
              <ImageWrapper>
                <Image
                  width={182.23}
                  height={121.55}
                  alt="logo-bgr"
                  src="/logo-bgr.svg"
                />
              </ImageWrapper>
              <FormTitle>Iniciar sesión</FormTitle>
              <BoxFields>
                <InputField
                  label="Nombre de usuario"
                  error={!!formErrors.username}
                  {...formRegister("username")}
                />
                <InputField
                  type="password"
                  label="Contraseña"
                  error={!!formErrors.password}
                  {...formRegister("password")}
                />
              </BoxFields>
              <BoxButtons>
                <ButtonPrimary type="submit">INGRESAR</ButtonPrimary>
                <ButtonForgotPassword type="button">
                  ¿Has olvidado tu contraseña{" "}
                </ButtonForgotPassword>
              </BoxButtons>
            </LoginFormCard>
          </LoginFormBox>
        </motion.div>
      </LoginGrid>
    </LoginContainer>
  );
};
