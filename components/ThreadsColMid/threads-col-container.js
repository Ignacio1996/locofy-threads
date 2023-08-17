import NewThreadInput from "./new-thread-input";
import Thread from "./thread";
import styles from "./threads-col-container.module.css";
const ThreadsColContainerColumn = () => {
  return (
    <div className={styles.threadscontainer}>
      <NewThreadInput />
      <Thread
        showShare
        showAvatar
        username="arochinski"
        timeSpentSincePosted="2min"
        thread="It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer"
        commentsShown
        avatar="/avatar.svg"
        vector1="/vector-111.svg"
        avatar1="/avatar1.svg"
      />
      <Thread
        showShare={false}
        showAvatar={false}
        username="aura"
        timeSpentSincePosted="1min"
        thread={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        commentsShown={false}
        avatar="/avatar2.svg"
        avatarIconWidth="36px"
        vector1="/vector-121.svg"
        avatar1="/avatar3.svg"
        avatarIconWidth1="36px"
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
      />
      <Thread
        showShare={false}
        showAvatar={false}
        username="aura"
        timeSpentSincePosted="2min"
        thread="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        commentsShown
        avatar="/avatar4.svg"
        avatarIconWidth="41px"
        vector1="/vector-131.svg"
        avatar1="/avatar5.svg"
        avatarIconWidth1="36px"
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
      />
      <Thread
        showShare={false}
        showAvatar={false}
        username="aura"
        timeSpentSincePosted="4min"
        thread="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        commentsShown={false}
        avatar="/avatar6.svg"
        avatarIconWidth="36px"
        vector1="/vector-141.svg"
        avatar1="/avatar7.svg"
        avatarIconWidth1="36px"
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
      />
      <Thread
        showShare={false}
        showAvatar={false}
        username="aura"
        timeSpentSincePosted="2min"
        thread="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        commentsShown
        avatar="/avatar8.svg"
        avatarIconWidth="41px"
        vector1="/vector-131.svg"
        avatar1="/avatar9.svg"
        avatarIconWidth1="36px"
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
      />
      <Thread
        showShare={false}
        showAvatar={false}
        username="aura"
        timeSpentSincePosted="2min"
        thread="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        commentsShown
        avatar="/avatar10.svg"
        avatarIconWidth="41px"
        vector1="/vector-131.svg"
        avatar1="/avatar11.svg"
        avatarIconWidth1="36px"
        respostasColor="#999"
        ellipseDivBackgroundColor="#999"
        curtidasColor="#999"
      />
    </div>
  );
};

export default ThreadsColContainerColumn;
