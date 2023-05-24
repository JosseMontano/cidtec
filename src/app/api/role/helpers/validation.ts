import { z } from "zod";

export const postSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  description: z.string().min(2, "la descripcion es requerida"),
});
