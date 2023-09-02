import { v2 as cloudinary } from "cloudinary";
import Post from "@/models/post";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const GET = async (req: NextApiRequest) => {
  try {
    await connectToDB();
    const posts = await Post.find({});
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json("Fetching posts failed, please try again", {
      status: 500,
    });
  }
};

export const POST = async (req: NextApiRequest) => {
  try {
    const { name, prompt, photo } = req.json();

    const photoUrl = await cloudinary.uploader.upload(photo);

    await connectToDB();

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    return NextResponse.json({ success: true, data: newPost }, { status: 200 });
  } catch (err) {
    return NextResponse.json("Unable to create a post, please try again", {
      status: 500,
    });
  }
};
