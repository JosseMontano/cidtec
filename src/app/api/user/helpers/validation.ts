import { z } from "zod";

export const postSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().min(2, "El email es requerido")
});
