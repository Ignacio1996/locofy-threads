import UserInfo from "./user-info";
import ThreadsColContainerColumn from "./threads-col-container";
import TrendingTopicsContainer from "./trending-topics-container";
import styles from "./page-content.module.css";
const PageContent = () => {
  return (
    <div className={styles.content}>
      <UserInfo />
      <ThreadsColContainerColumn />
      <TrendingTopicsContainer />
    </div>
  );
};

export default PageContent;
