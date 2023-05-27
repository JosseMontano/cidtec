import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const getRoles = async (res: NextApiResponse) => {
  try {
    const roles = await prisma.role.findMany();
    return res.status(200).json(roles);
  } catch (error) {
    return res.status(500).json(error);
  }
};
