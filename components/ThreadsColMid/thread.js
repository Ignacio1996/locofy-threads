import styles from "./thread.module.css";
const Thread5 = ({ username, timeSpentSincePosted, thread, commentsShown }) => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
        <img className={styles.threadChild} alt="" src="/vector-111.svg" />
        <img className={styles.avatarIcon1} alt="" src="/avatar1.svg" />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <div className={styles.headingInfos}>
            <div className={styles.aura}>{username}</div>
            <div className={styles.rightInfos}>
              <div className={styles.min}>{timeSpentSincePosted}</div>
              <div className={styles.dots}>
                <div className={styles.dotsChild} />
                <div className={styles.dotsChild} />
                <div className={styles.dotsChild} />
              </div>
            </div>
          </div>
          <div className={styles.temporDolorProident}>{thread}</div>
        </div>
        <div className={styles.carrossel}>
          <img
            className={styles.carrosselChild}
            alt=""
            src="/rectangle-92@2x.png"
          />
          <img
            className={styles.carrosselChild}
            alt=""
            src="/rectangle-82@2x.png"
          />
        </div>
        <div className={styles.actions}>
          <img className={styles.likeIcon} alt="" src="/like3.svg" />
          <img className={styles.likeIcon} alt="" src="/comment2.svg" />
          <img className={styles.likeIcon} alt="" src="/repost2.svg" />
          <img className={styles.likeIcon} alt="" src="/send3.svg" />
        </div>
        {commentsShown && (
          <div className={styles.respostasECurtidas}>
            <div className={styles.respostas}>7 respostas</div>
            <div className={styles.respostasECurtidasChild} />
            <div className={styles.respostas}>59 curtidas</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thread5;
