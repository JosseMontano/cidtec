import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ message: "welcome to user" });
      //await getUsers(res);
      break;
    case "POST":
      // await post(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
}
