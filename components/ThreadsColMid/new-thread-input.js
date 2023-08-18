import styles from "./new-thread.module.css";
const NewThreadInput = () => {
  return (
    <div className={styles.newthreadinput}>
      <div className={styles.thread}>
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
          <img className={styles.actionsIcon} alt="" src="/actions@2x.png" />
          <button className={styles.actions1}>
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

export default NewThreadInput;
