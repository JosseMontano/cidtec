import { prisma } from "@/app/lib/prisma";
import { NextApiResponse } from "next";

export const deleteProject = async (id: number, res: NextApiResponse) => {
  try {
    const project = await prisma.project.delete({
      where: { id },
    });
    res.status(200).json({ message: "Se elimino el proyecto", project: project });
  } catch (error) {
    res.status(500).json(error);
  }
};
