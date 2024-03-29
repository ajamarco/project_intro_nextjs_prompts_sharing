import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const dynamic = "force-dynamic";

export const GET = async (req, res) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200, headers: { "Cache-Control": "no-store, max-age=0" } });
  } catch (error) {
    console.log("something happened... ", error);
    return new Response("failed to get prompts", { status: 500 });
  }
};
