import { NextApiResponse } from "next";
import postI from "./helpers/interface";
import { postSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";

export const postPost = async (body: postI, res: NextApiResponse) => {
  const { authorId, description, title } = body;

  try {
    postSchema.parse(body);

    const post = await prisma.post.create({
      data: {
        authorId,
        description,
        title,
      },
    });

    res
      .status(200)
      .json({ message: "La publicacion se creo satisfactoriamente", data:post });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
