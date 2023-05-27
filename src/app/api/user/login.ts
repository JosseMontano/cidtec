import { NextApiResponse } from "next";
import { prisma } from "@/app/lib/prisma";
import User from "./helpers/interface";

export const login = async (body: User, res: NextApiResponse) => {
  const { name, email, photo } = body;

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if(user) {
    res
      .status(200)
      .json({ message: "Usuario encontrado", user });
  } 

  const newUser = await prisma.user.create({
    data: {
      name, 
      email,
      photo,
      roleId: 3
    }
  });

  res
    .status(200)
    .json({ message: "El usuario se creo satisfactoriamente", user: newUser });
};
