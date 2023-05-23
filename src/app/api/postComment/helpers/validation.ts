import { z } from "zod";

export const commentSchema = z.object({
  description: z.string().min(2, "la descripcion es requerida"),
  featured: z.boolean(),
  postId: z.number(),
  authorId: z.number(),
});
