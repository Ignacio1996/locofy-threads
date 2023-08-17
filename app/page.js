"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [threads, setThreads] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createThread = async () => {
    console.log("page.js 4 | posting to server");
    try {
      await fetch("api/thread", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ thread: inputValue }),
      });

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
    console.log("page.js 38 | deleting id", id);
    try {
      const request = await fetch(`api/thread`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const response = await request.json();
      console.log("page.js 48 | response", response);
      getThreads();
      console.log("page.js 51 | deleted!");
    } catch (error) {
      console.log("page.js 13 | error", error.message);
    }
  };

  const like = async (threadId) => {
    try {
      const request = await fetch("api/thread", {
        method: "POST",
        body: JSON.stringify({ type: "like", threadId }),
      });
      getThreads();
      console.log("page.js 31 | threads in client", typeof threads);
    } catch (error) {
      console.log("page.js | error getting threads", error.message);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <main>
      <h3>Threads Clone Backend Update</h3>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={createThread}>Create Thread</button>
      <div>
        <h4>Threads:</h4>
        <ul>
          {threads &&
            threads?.threads?.map((thread, index) => (
              <li key={index}>
                <span>{thread.user}</span>
                {thread.thread}
                <button onClick={() => like(thread._id)}>Like</button>
                <div>Likes {thread.likes || 0}</div>
                <button onClick={() => deleteThread(thread._id)}>x</button>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
