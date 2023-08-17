"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [threads, setThreads] = useState([]);

  const createThread = async () => {
    console.log("page.js 4 | posting to server");
    try {
      const request = await fetch("api/thread", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ thread: "Hello World" }),
      });

      const response = await request.json();
      console.log("page.js 15 | response", response);
      // Refresh the threads after creating a new one
      getThreads();
    } catch (error) {
      console.log("page.js 13 | error", error.message);
    }
  };

  const getThreads = async () => {
    console.log("page.js 27 | getting threads...");
    try {
      const request = await fetch("api/thread");
      const threads = await request.json();
      setThreads(threads);
      console.log("page.js 31 | threads in client", typeof threads);
    } catch (error) {
      console.log("page.js | error getting threads", error.message);
    }
  };

  const deleteThread = async (id) => {
    console.log("page.js 38 | deleting...");
    try {
      const request = await fetch("api/thread", {
        method: "DELETE",
        // headers: {
        //   "Content-type": "application/json",
        // },
        body: JSON.stringify({ threadId: id }),
      });

      const response = await request.json();
      console.log("page.js 48 | response", response);
      getThreads();
      console.log("page.js 51 | deleted!");
    } catch (error) {
      console.log("page.js 13 | error", error.message);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <main>
      <h3>Threads Clone Backend Update</h3>
      <button onClick={createThread}>Create Thread</button>
      <div>
        <h4>Threads:</h4>
        <ul>
          {threads &&
            threads?.threads?.map((thread, index) => (
              <li key={index}>
                {thread.thread}{" "}
                <button onClick={() => deleteThread(thread._id)}>x</button>
              </li> // Modify according to your thread structure
            ))}
        </ul>
      </div>
    </main>
  );
}
