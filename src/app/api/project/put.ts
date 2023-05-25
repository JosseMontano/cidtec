import { NextApiResponse } from "next";
import projectType from "./helpers/interface";
import { projectSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/app/lib/prisma";

export const putProject = async (
  id: number,
  body: projectType,
  res: NextApiResponse
) => {
  const { description, title, bossId, teamId } = body;

  try {
    projectSchema.parse(body);

    const post = await prisma.project.update({
      where: {
        id,
      },
      data: {
        bossId,
        description,
        title,
        teamId,
      },
    });

    res.status(200).json({
      message: "El proyecto se actualizo satisfactoriamente",
      post,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
