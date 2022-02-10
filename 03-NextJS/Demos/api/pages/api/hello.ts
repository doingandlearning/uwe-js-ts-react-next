import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
  error?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    //
    res.status(200).json({ message: "Hello" });
  } catch (error) {
    // logging service?
    // reasonable ...
    res.status(400).json({ message: "Some error", error: true });
  }
}
