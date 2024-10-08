import { z } from "zod";

const mapError = (issue: z.ZodIssueOptionalMessage) => {
  switch (issue.code) {
    case "invalid_type":
      return { message: "Campo inválido" };
    case "custom":
      return { message: issue.message ?? "Campo inválido" };
    case "too_small":
      return {
        message: "O campo deve ter no mínimo " + issue.minimum + " caracteres",
      };
    case "too_big":
      return {
        message: "O campo deve ter no máximo " + issue.maximum + " caracteres",
      };
    default:
      return { message: "Campo inválido" };
  }
};

export const CommonValidations = {
  string: z.string({
    errorMap: mapError,
  }),
  number: z.number({
    errorMap: mapError,
  }),
};
