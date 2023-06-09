import { getUsers } from "@/app/api/user/get";
import { postUser } from "@/app/api/user/post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      await getUsers(res);
      break;
    case "POST":
      await postUser(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
