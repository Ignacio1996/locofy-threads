import connectDB from "@/app/db/mongodb";
import Thread from "@/app/models/thread";
import { NextResponse } from "next/server";

await connectDB();

export async function POST(req) {
  try {
    console.log("route.js 6 | reached route!");
    // await connectDB();
    await Thread.create({ thread: "hello world!", date: Date.now() });

    return NextResponse.json({ success: "thread created!" });
  } catch (error) {
    console.log("route.js 8 | error reaching route");
  }
}

export async function GET(req) {
  try {
    // await connectDB();
    const threads = await Thread.find();
    console.log("route.js 20 | threads", threads.length);
    return NextResponse.json({ threads });
  } catch (error) {
    console.log("route.js | error retrieving threads");
    return NextResponse.json({ error: "Failed to retrieve threads" });
  }
}

export async function PUT(req, res) {
  try {
    const { id, thread } = req.body;
    // await connectDB();
    await Thread.findByIdAndUpdate(id, { thread }, { new: true });
    return NextResponse.json({ success: "thread updated!" });
  } catch (error) {
    console.log("route.js | error updating thread");
    return NextResponse.json({ error: "Failed to update thread" });
  }
}

export async function DELETE(req) {
  try {
    const { id } = req.body;
    console.log("route.js 47 | deleting at id", id);
    // await connectDB();
    await Thread.findByIdAndDelete(id);
    return NextResponse.json({ success: "thread deleted!" });
  } catch (error) {
    console.log("route.js | error deleting thread");
    return NextResponse.json({ error: "Failed to delete thread" });
  }
}
