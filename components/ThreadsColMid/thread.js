import { useMemo } from "react";
import styles from "./thread.module.css";
const Thread = ({
  showShare,
  showAvatar,
  username,
  timeSpentSincePosted,
  thread,
  commentsShown,
  avatar,
  avatarIconWidth,
  vector1,
  avatar1,
  avatarIconWidth1,
  respostasColor,
  ellipseDivBackgroundColor,
  curtidasColor,
}) => {
  const avatarIcon2Style = useMemo(() => {
    return {
      width: avatarIconWidth,
    };
  }, [avatarIconWidth]);

  const avatarIcon3Style = useMemo(() => {
    return {
      width: avatarIconWidth1,
    };
  }, [avatarIconWidth1]);

  const respostas1Style = useMemo(() => {
    return {
      color: respostasColor,
    };
  }, [respostasColor]);

  const ellipseDiv4Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const curtidas1Style = useMemo(() => {
    return {
      color: curtidasColor,
    };
  }, [curtidasColor]);

  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <img
          className={styles.avatarIcon}
          alt=""
          src={avatar}
          style={avatarIcon2Style}
        />
        {showShare && (
          <img className={styles.threadChild} alt="" src={vector1} />
        )}
        {showAvatar && (
          <img
            className={styles.avatarIcon1}
            alt=""
            src={avatar1}
            style={avatarIcon3Style}
          />
        )}
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
            <div className={styles.respostas} style={respostas1Style}>
              7 respostas
            </div>
            <div
              className={styles.respostasECurtidasChild}
              style={ellipseDiv4Style}
            />
            <div className={styles.respostas} style={curtidas1Style}>
              59 curtidas
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thread;
