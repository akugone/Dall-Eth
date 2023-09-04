import Post from "@/models/post";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
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
