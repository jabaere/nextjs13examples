import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import ResponseCache from "next/dist/server/response-cache";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (err) {
    return new ResponseCache("Failed to create a new prompt", { status: 500 });
  }
};