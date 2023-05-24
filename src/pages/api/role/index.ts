import { getRoles } from "@/app/api/role/get";
import { postRole } from "@/app/api/role/post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      await getRoles(res);
      break;
    case "POST":
      await postRole(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
