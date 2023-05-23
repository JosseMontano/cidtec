import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2, "El titulo es requerido"),
  description: z.string().min(2, "la descripcion es requerida"),
  authorId: z.number(),
});
