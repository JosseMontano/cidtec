import { z } from "zod";

export const ProjectCommentsSchema = z.object({
  description: z.string().min(2, "la descripcion es requerida"),
  featured: z.boolean(),
  projectId: z.number(),
  authorId: z.number(),
});
