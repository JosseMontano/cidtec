import { prisma } from "@/app/lib/prisma";
import { NextApiResponse } from "next";

export const getComments = async (id: number, res: NextApiResponse) => {
  try {
    const comments = await prisma.$queryRaw`
      SELECT pc.description, pc.featured, pc."postId", pc."authorId",
      us.id
      FROM "PostComment" pc 
      INNER JOIN "Post" p on p.id = pc."postId"
      INNER JOIN "User" us on us.id = p."authorId"
      where "postId"=${id}
     `;
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
