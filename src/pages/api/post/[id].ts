import { deletePost } from "@/app/api/post/delete";
import { putPost } from "@/app/api/post/put";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body, query } = req;

  const { id } = query;

  switch (method) {
    case "DELETE":
      await deletePost(Number(id), res);
      break;
    case "PUT":
      await putPost(Number(id), body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
