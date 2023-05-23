import { prisma } from "@/app/lib/prisma";
import { NextApiResponse } from "next";

export const getPosts = async (res: NextApiResponse) => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        users: true,
        authorId: true,
      },
    });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error);
  }
};
