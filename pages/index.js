import Navbar from "../components/ThreadsColMid/navbar";
import PageContent from "../components/ThreadsColMid/page-content";
import styles from "./index.module.css";
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.feed}>
        <Navbar />
        <PageContent />
      </div>
    </div>
  );
};

export default Content;
