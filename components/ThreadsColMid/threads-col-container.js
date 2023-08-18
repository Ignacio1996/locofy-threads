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
        inputValue={setInputValue}
        setInputValue={setInputValue}
        createThread={createThread}
      />
      {threads &&
        threads.threads?.map((thread) => {
          return (
            <ThreadContainer
              username={thread.username}
              timeSpentSincePosted={thread.date}
              thread={thread.thread}
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
      <ThreadContainer
        username="aura"
        timeSpentSincePosted="2min"
        thread="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        commentsShown
      />
      <ThreadContainer
        username="aura"
        timeSpentSincePosted="4min"
        thread="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        commentsShown={false}
      />
      <ThreadContainer
        username="aura"
        timeSpentSincePosted="2min"
        thread="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        commentsShown
      />
      <ThreadContainer
        username="aura"
        timeSpentSincePosted="2min"
        thread="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        commentsShown
      />
    </div>
  );
};

export default ThreadsColContainerColumn;
