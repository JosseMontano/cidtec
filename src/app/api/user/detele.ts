import { prisma } from "@/app/lib/prisma";
import { NextApiResponse } from "next";

export const deleteUser = async (id: number, res: NextApiResponse) => {
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "Se elimino el usuario", user });
  } catch (error) {
    res.status(500).json(error);
  }
};
