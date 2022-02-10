import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  error?: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);

    console.log(email);

    res.json({ message: "Success! All signed up!" });
  } else {
    res.status(400).json({ message: "HTTP Verb not supported", error: true });
  }
}
