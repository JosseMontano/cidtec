import { deleteProject } from "@/app/api/project/delete";
import { putProject } from "@/app/api/project/put";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  const { id } = query;

  switch (method) {
    case "DELETE":
      await deleteProject(Number(id), res);
      break;
    case "PUT":
      await putProject(Number(id), body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
