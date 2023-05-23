import { NextApiResponse } from "next";
import commentType from "./helpers/interface";
import { commentSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/app/lib/prisma";

export const postComment = async (body: commentType, res: NextApiResponse) => {
  const { description, featured, postId, authorId } = body;

  try {
    commentSchema.parse(body);

    const comment = await prisma.PostComment.create({
      data: {
        description,
        featured,
        postId,
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
