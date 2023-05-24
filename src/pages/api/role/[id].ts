import { deleteRole } from "@/app/api/role/delete";
import { putRole } from "@/app/api/role/put";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  const { id } = query;

  switch (method) {
    case "DELETE":
      await deleteRole(Number(id), res);
      break;
    case "PUT":
      await putRole(Number(id), body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}