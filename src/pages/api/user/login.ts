import { getUsers } from "@/app/api/user/get";
import { login } from "@/app/api/user/login";
import { postUser } from "@/app/api/user/post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      await login(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
