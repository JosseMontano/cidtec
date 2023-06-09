import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const deletePost = async (id: number, res: NextApiResponse) => {
  try {
    const post = await prisma.post.delete({
      where: { id },
    });
    res.status(200).json({ message: "Se elimino la publicacion", data: post });
  } catch (error) {
    res.status(500).json(error);
  }
};
