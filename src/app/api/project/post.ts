import { NextApiResponse } from "next";
import projectType from "./helpers/interface";
import { projectSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";

export const projectPost = async (body: projectType, res: NextApiResponse) => {
  const { description, title, bossId, teamId } = body;

  try {
    projectSchema.parse(body);

    const project = await prisma.project.create({
      data: {
        bossId,
        description,
        title,
        teamId,
      },
    });

    res
      .status(200)
      .json({ message: "La publicacion se creo satisfactoriamente", project });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
