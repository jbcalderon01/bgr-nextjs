import * as yup from "yup";

export const loginFormSchemaValidation = yup.object({
  username: yup.string().email().required(),
  password: yup.string().required(),
});
