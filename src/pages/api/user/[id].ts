import { deleteUser } from "@/app/api/user/detele";
import { putUser } from "@/app/api/user/put";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  const { id } = query;

  switch (method) {
    case "DELETE":
      await deleteUser(Number(id), res);
      break;
    case "PUT":
      await putUser(Number(id), body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}