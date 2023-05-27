import { NextApiResponse } from "next";
import Role from "./helpers/interface";
import { postSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";

export const postRole = async (body: Role, res: NextApiResponse) => {
  const { description, name } = body;

  try {
    postSchema.parse(body);

    const role = await prisma.role.create({
      data: {
        name,
        description,
      },
    });

    res
      .status(200)
      .json({ message: "El rol se creo satisfactoriamente", role });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
