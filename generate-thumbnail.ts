import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  try {
    const output = await replicate.run(
      "stability-ai/sdxl:8e12e06556f8d0c4ff6ff7e66d771afdf84e888c180191f5ae36096f7156314c",
      {
        input: {
          prompt,
          width: 1280,
          height: 720,
        },
      }
    );

    const imageUrl = Array.isArray(output) ? output[0] : output;
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Thumbnail error:", error);
    res.status(500).json({ error: "Failed to generate thumbnail" });
  }
}