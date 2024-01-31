// current file's path: ./app/api/users/[id]/prompts/route.js

import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const dynamic = "force-dynamic";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const prompts = await Prompt.find({
      creator: params.id,
    }).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("something happened... ", error);
    return new Response("failed to get prompts", { status: 500 });
  }
};
