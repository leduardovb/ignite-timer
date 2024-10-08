import z from "zod";

const StartTaskSchema = z.object({
  task: z
    .string()
    .min(1, "O nome da tarefa é obrigatório")
    .max(50, "O nome da tarefa deve ter no máximo 50 caracteres"),
  minutesAmount: z
    .number()
    .int("O tempo deve ser um número inteiro")
    .positive("O tempo deve ser um número positivo")
    .max(60, "O tempo deve ser no máximo 60 minutos"),
});

type StartTask = z.infer<typeof StartTaskSchema>;

export { StartTaskSchema, type StartTask };
