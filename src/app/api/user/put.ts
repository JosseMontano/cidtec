import { NextApiResponse } from "next";
import { postSchema } from "./helpers/validation";
import { ZodError } from "zod";
import { prisma } from "@/app/lib/prisma";
import User from "./helpers/interface";

export const putUser = async (id: number, body: User, res: NextApiResponse) => {
  const { name, email, photo, roleId } = body;

  try {
    postSchema.parse(body);

    const user = await prisma.user.update({
      where: {
        id
      },
      data: {
        name,
        email,
        photo,
        roleId
      },
    });

    res
      .status(200)
      .json({ message: "El usuario se actualizo satisfactoriamente", user });
  } catch (error) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json({ message: error });
  }
};
