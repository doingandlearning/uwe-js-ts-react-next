import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  error?: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.query);
  res.json({ message: "Success! All signed up!" });
}
