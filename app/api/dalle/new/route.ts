import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// OK - console.log("openAI Key", process.env.OPENAI_API_KEY);

const openai = new OpenAIApi(configuration);

// OK - console.log("openAI config", openai);

export const POST = async (req: NextApiRequest) => {
  try {
    const { prompt } = await req.json();

    console.log("prompt", prompt);

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    console.log("aiResponse", aiResponse);

    const image = aiResponse.data.data[0].b64_json;

    console.log("image", image);

    return NextResponse.json({ photo: image }, { status: 201 });
  } catch (error) {
    return NextResponse.json("Something went wrong", { status: 500 });
  }
};
