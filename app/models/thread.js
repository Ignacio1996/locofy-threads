import mongoose, { Schema } from "mongoose";

const threadSchema = new Schema({
  thread: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Thread = mongoose.model("Thread", threadSchema);

export default Thread;
