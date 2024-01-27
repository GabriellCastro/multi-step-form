import * as yup from "yup";
import { cpfSchema, emailSchema } from "./shared";

export const createUserSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: emailSchema().required("Campo obrigatório"),
  cpf: cpfSchema(),
  whatsapp: yup
    .string()
    .test("is-whatsApp", "Campo inválido", (value, testContext) => {
      if (value?.replaceAll(/[(|)|_|-]/g, "").length !== 12) return false;
      return true;
    })
    .required("Campo obrigatório"),
});

export const createUserPasswordSchema = yup.object({
  password: yup
    .string()
    .required("Campo obrigatório.")
    .min(8, "Mínimo 8 caracteres."),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório.")
    .test("confirm-password", "Campo inválido", (value, testContext) => {
      if (value === testContext.parent?.password) return true;
      return false;
    })
    .min(8, "Mínimo 8 caracteres."),
});
