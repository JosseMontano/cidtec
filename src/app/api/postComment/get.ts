import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const getComments = async (id: number, res: NextApiResponse) => {
  try {
    const comments = await prisma.$queryRaw`
      SELECT pc.id,pc.description, pc.featured, pc."postId", pc."authorId",
      us.email
      FROM "PostComment" pc 
      INNER JOIN "Post" p on p.id = pc."postId"
      INNER JOIN "User" us on us.id = pc."authorId"
      where "postId"=${id}
     `;
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
