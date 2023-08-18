import NewThreadInput from "./new-thread-input";
import ThreadContainer from "./thread";
import styles from "./threads-col-container.module.css";
const ThreadsColContainerColumn = ({
  inputValue,
  setInputValue,
  createThread,
  threads,
}) => {
  return (
    <div className={styles.threadscontainer}>
      <NewThreadInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        createThread={createThread}
      />
      {threads &&
        threads.threads?.map((thread) => {
          return (
            <ThreadContainer
              username={thread.username}
              timeSpentSincePosted={thread.date}
              thread={thread.content}
              commentsShown={false}
            />
          );
        })}
      <ThreadContainer
        username="aura"
        timeSpentSincePosted="1min"
        thread={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        commentsShown={false}
      />
    </div>
  );
};

export default ThreadsColContainerColumn;
