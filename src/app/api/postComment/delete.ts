import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const deleteComment = async (id: number, res: NextApiResponse) => {
  try {
    const comment = await prisma.postComment.delete({
      where: { id },
    });
    res.status(200).json({ message: "Se elimino el comentatio", comment });
  } catch (error) {
    res.status(500).json(error);
  }
};
