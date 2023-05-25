
import { postComment } from "@/app/api/projectComment/post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "POST":
      await postComment(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
