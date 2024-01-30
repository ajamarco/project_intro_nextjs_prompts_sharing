import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

//GET method
export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();
    const prompt = await Prompt.findById(params.id).populate("creator");

    //if prompt wasn't found, return a 404 response
    if (!prompt) return new Response("prompt not found", { status: 404 });

    //return the prompt
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("failed to get the prompt", { status: 500 });
  }
};

//PATCH method
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDatabase();

    const existingPrompt = await Prompt.findById(params.id);

    //if prompt wasn't found, return a 404 response
    if (!existingPrompt) return new Response("prompt not found", { status: 404 });

    //update the prompt
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    //save the prompt
    await existingPrompt.save();

    //return the prompt
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("failed to update the prompt", { status: 500 });
  }
};

//DELETE METHOD
export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("failed to delete the prompt", { status: 500 });
  }
};
