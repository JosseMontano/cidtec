import { getPosts } from "@/app/api/post/get";
import { postPost } from "@/app/api/post/post";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      await getPosts(res);
      break;
    case "POST":
      await postPost(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
