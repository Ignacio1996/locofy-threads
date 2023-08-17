import Carousel from "./carousel";
import styles from "./thread.module.css";
const Thread = () => {
  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <img
          className={styles.avatarIcon}
          alt=""
          src="/threadsImages/avatar3.svg"
        />
        <img
          className={styles.threadChild}
          alt=""
          src="/threadsImages/vector-11.svg"
        />
        <img
          className={styles.avatarIcon1}
          alt=""
          src="/threadsImages/avatar4.svg"
        />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <div className={styles.headingInfos}>
            <div className={styles.aura}>aura</div>
            <div className={styles.rightInfos}>
              <div className={styles.min}>2min</div>
              <div className={styles.dots}>
                <div className={styles.dotsChild} />
                <div className={styles.dotsChild} />
                <div className={styles.dotsChild} />
              </div>
            </div>
          </div>
          <div className={styles.iAmExcited}>
            I am excited to share with you my latest projects
          </div>
        </div>
        <Carousel showCarrossel />
        <div className={styles.actions}>
          <img
            className={styles.likeIcon}
            alt=""
            src="/threadsImages/like2.svg"
          />
          <img
            className={styles.likeIcon}
            alt=""
            src="/threadsImages/comment1.svg"
          />
          <img
            className={styles.likeIcon}
            alt=""
            src="/threadsImages/repost1.svg"
          />
          <img
            className={styles.likeIcon}
            alt=""
            src="/threadsImages/send3.svg"
          />
        </div>
        <div className={styles.respostasECurtidas}>
          <div className={styles.respostas}>7 respostas</div>
          <div className={styles.respostasECurtidasChild} />
          <div className={styles.respostas}>59 curtidas</div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
