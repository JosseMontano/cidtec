import { getProjects } from "@/app/api/project/get";
import { projectPost } from "@/app/api/project/post";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      await getProjects(res);
      break;
    case "POST":
      await projectPost(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
