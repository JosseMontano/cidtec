import { deleteComment } from "@/app/api/projectComment/delete";
import { putComment } from "@/app/api/projectComment/put";
import { NextApiRequest, NextApiResponse } from "next";
import { getComments } from "@/app/api/projectComment/get";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  const { id } = query;

  switch (method) {
    case "GET":
      await getComments(Number(id), res);
      break;
    case "DELETE":
      await deleteComment(Number(id), res);
      break;
    case "PUT":
      await putComment(Number(id), body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
