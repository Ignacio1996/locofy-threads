import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

// const commentSchema = new mongoose.Schema({
//   threadID: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Thread",
//     required: true,
//   },
//   content: { type: String, required: true },
//   timestamp: { type: Date, default: Date.now },
//   likes: { type: Number, default: 0 },
// });

// const likeSchema = new mongoose.Schema({
//   threadID: { type: mongoose.Schema.Types.ObjectId, ref: "Thread" },
//   commentID: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
//   timestamp: { type: Date, default: Date.now },
// });

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);
// const Comment =
//   mongoose.models.Thread || mongoose.model("Comment", commentSchema);
// const Like = mongoose.models.Thread || mongoose.model("Like", likeSchema);

export { Thread };
