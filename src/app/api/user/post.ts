import { NextApiResponse } from "next";
import { postSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import User from "./helpers/interface";

export const postUser = async (body: User, res: NextApiResponse) => {
  const { name, email, photo, roleId } = body;

  const actualUser = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if(actualUser) {
    res
      .status(400)
      .json({ message: "Ya existe un usuario con este email" });
  }

  try {
    postSchema.parse(body);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        photo,
        roleId
      },
    });

    res
      .status(200)
      .json({ message: "El usuario se creo satisfactoriamente", user });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
