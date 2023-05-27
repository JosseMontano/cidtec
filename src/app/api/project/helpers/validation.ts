import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(2, "El titulo es requerido"),
  description: z.string().min(2, "la descripcion es requerida"),
  bossId: z.number(),
  teamId: z.number(),
});

