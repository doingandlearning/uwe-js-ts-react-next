import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

interface Data {
  message: string;
  feedback?: string;
  error?: boolean;
  allFeedback?: string;
}

// - Send a response

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    if (req.method === "POST") {
      const { email, feedback } = JSON.parse(req.body);

      if (!email || !feedback) {
        throw new Error("You need to provide an email and feedback.");
      }

      const newFeedback = {
        id: new Date().toISOString(),
        email,
        feedback,
      };

      // Open and read that file
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData.toString());
      // Add the new feedback to the end
      data.push(newFeedback);
      // Replace the file with new feedback
      fs.writeFileSync(filePath, JSON.stringify(data));

      res
        .status(201)
        .json({ message: "Success", feedback: JSON.stringify(newFeedback) });
    } else {
      const fileData = fs.readFileSync(filePath);
      const data = JSON.parse(fileData.toString());
      res.json({
        message: "Success",
        allFeedback: JSON.stringify(data),
      });
    }
  } catch (error) {
    // logging service?
    // reasonable ...
    res.status(400).json({ message: "Some error", error: true });
  }
}
