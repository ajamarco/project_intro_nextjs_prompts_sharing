import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const dynamic = "force-dynamic";

export const POST = async (req, res) => {
  const { prompt, userId, tag } = await req.json();
  try {
    await connectToDatabase();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log("something happened... ", error);
    return new Response("failed to create a new prompt", { status: 500 });
  }
};
