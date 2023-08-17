import styles from "./new-thread.module.css";
const NewThread = () => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <img
          className={styles.avatarIcon}
          alt=""
          src="/threadsImages/avatar2.svg"
        />
      </div>
      <div className={styles.infosActions}>
        <input
          className={styles.infos}
          type="text"
          placeholder="Share something cool today"
        />
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <img
              className={styles.paperclipIcon}
              alt=""
              src="/threadsImages/paperclip.svg"
            />
          </div>
          <button className={styles.actions2}>
            <img
              className={styles.sendIcon}
              alt=""
              src="/threadsImages/send2.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewThread;
