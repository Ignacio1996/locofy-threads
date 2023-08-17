import Image from "next/image";
import styles from "./page.module.css";
import ThreadsColContainer from "@/components/ThreadsColMid/threads-col-container";
import "../pages/global.css";

export default function Home() {
  return (
    <main>
      <ThreadsColContainer />
    </main>
  );
}
