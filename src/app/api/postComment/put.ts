import { NextApiResponse } from "next";
import postI from "./helpers/interface";
import { commentSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/app/lib/prisma";
import commentType from "./helpers/interface";

export const putComment = async (
  id: number,
  body: commentType,
  res: NextApiResponse
) => {
  const { description, featured, postId, authorId } = body;

  try {
    commentSchema.parse(body);

    const post = await prisma.PostComment.update({
      where: {
        id,
      },
      data: {
        description,
        featured,
        postId,
        authorId,
      },
    });

    res.status(200).json({
      message: "El comentario fue actualizado",
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
