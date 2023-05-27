import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const getProjects = async (res: NextApiResponse) => {
  try {
    const projects = await prisma.$queryRaw`
      select pro.id, pro.title, pro.description, pro."teamId", pro."bossId",
      te.name as "nameTeam"
      from "Project" pro
      INNER JOIN "Team" te ON te.id = pro."teamId"
      INNER JOIN "User" us ON us.id = te."teacherId"
      `;
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json(error);
  }
};
