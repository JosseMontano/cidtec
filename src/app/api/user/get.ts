import { prisma } from "@/app/lib/prisma";
import { NextApiResponse } from "next";

export const getUsers = async (res: NextApiResponse) => {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
