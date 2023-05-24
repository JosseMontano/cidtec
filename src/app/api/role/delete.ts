import { prisma } from "@/app/lib/prisma";
import { NextApiResponse } from "next";

export const deleteRole = async (id: number, res: NextApiResponse) => {
  try {
    const role = await prisma.role.delete({
      where: { id },
    });
    res.status(200).json({ message: "Se elimino el rol", role });
  } catch (error) {
    res.status(500).json(error);
  }
};
