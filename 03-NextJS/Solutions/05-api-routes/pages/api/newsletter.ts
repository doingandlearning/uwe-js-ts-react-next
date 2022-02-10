import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
  error?: boolean;
}

// - Send a response

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === "POST") {
      const { email } = JSON.parse(req.body);

      if (!email) {
        throw new Error("You need to provide an email and feedback.");
      }

      console.log(email);
      res.status(201).json({ message: "Success" });
    }
  } catch (error) {
    // logging service?
    // reasonable ...
    res.status(400).json({ message: "Some error", error: true });
  }
}
