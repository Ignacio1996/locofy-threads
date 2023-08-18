import connectDB from "@/app/db/mongodb";
import { Thread } from "@/app/models/thread";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("route.js 6 | POST!", req.body);
    const request = await req.json();
    console.log("route.js 59 | request from client", request);
    await connectDB();

    if (request.type === "like") {
      await Thread.findByIdAndUpdate(request.threadId, { $inc: { likes: 1 } });
    } else {
      await Thread.create({ content: request.thread, date: Date.now() });
      return NextResponse.json({ success: "thread created!" });
    }
  } catch (error) {
    console.log("route.js 8 | error reaching route", error);
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const threads = await Thread.find();
    console.log("route.js 20 | threads", threads.length);
    return NextResponse.json({ threads });
  } catch (error) {
    console.log("route.js | error retrieving threads");
    return NextResponse.json({ error: "Failed to retrieve threads" });
  }
}

export async function PUT(req, res) {
  console.log("route.js 80 | PUT ROUTE", req.body);
  try {
    const { id, thread, type } = req.body;
    await connectDB();
    if (type === "DELETE") {
      console.log("route.js 85 | deleting...");
      return NextResponse.json({ success: "thread deleted!" });
    } else {
      console.log("route.js 88 | updating thread");
      return NextResponse.json({ success: "thread updated!" });
    }
  } catch (error) {
    console.log("route.js | error updating thread");
    return NextResponse.json({ error: "Failed to update thread" });
  }
}

export async function DELETE(req, res) {
  try {
    const { id } = req.body;
    console.log("route.js 47 | deleting at id", id);
    const request = await req.json();
    console.log("route.js 59 | request from client", request);
    await connectDB();
    await Thread.findByIdAndDelete(request.id);
    return NextResponse.json({ success: "thread deleted!" });
  } catch (error) {
    console.log("route.js | error deleting thread");
    return NextResponse.json({ error: "Failed to delete thread" });
  }
}
