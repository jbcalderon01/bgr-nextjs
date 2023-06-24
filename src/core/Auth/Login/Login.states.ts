"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchemaValidation } from "./Login.validations";
import { LoginFormFields } from "./Login.types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLoginState = () => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);
  const {
    register,
    formState,
    handleSubmit: formSubmit,
    watch,
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginFormSchemaValidation),
  });

  const handleSubmit = formSubmit(() => {
    setIsLogged(true);
    setTimeout(() => {
      router.push("/admin");
    }, 1000);
  });
  return {
    isLogged,
    handleSubmit,
    formRegister: register,
    formErrors: formState.errors,
  };
};
