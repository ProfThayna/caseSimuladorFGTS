import { z } from "zod";

export const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  telefone: z
    .string()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido"),
  saldo: z.coerce.number().min(0.01, "Saldo deve ser maior que 0"),
  mes: z.string().min(1, "Selecione um mês"),
});