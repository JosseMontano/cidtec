import { NextApiResponse } from "next";
import ProjectCommentsType from "./helpers/interface";
import { ProjectCommentsSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/app/lib/prisma";

export const postComment = async (body: ProjectCommentsType, res: NextApiResponse) => {
  const { description, featured, authorId, projectId } = body;

  try {
    ProjectCommentsSchema.parse(body);

    const comment = await prisma.projectComment.create({
      data: {
        description,
        featured,
        projectId,
        authorId,
      },
    });

    res.status(200).json({ message: "Realizo un comentario", comment });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
