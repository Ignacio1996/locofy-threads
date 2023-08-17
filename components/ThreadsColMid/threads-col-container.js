import NewThread from "./new-thread";
import Thread from "./thread";
import styles from "./threads-col-container.module.css";
const ThreadsColContainer = () => {
  return (
    <div className={styles.threadscontainer}>
      <NewThread />
      <Thread />
      <div className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <img className={styles.threadChild} alt="" src="/vector-11.svg" />
            <img className={styles.avatarIcon1} alt="" src="/avatar2.svg" />
          </div>
          <div className={styles.infosActions}>
            <div className={styles.infos}>
              <div className={styles.headingInfos}>
                <div className={styles.aura}>arochinski</div>
                <div className={styles.rightInfos}>
                  <div className={styles.min}>2min</div>
                  <div className={styles.dots}>
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                  </div>
                </div>
              </div>
              <div className={styles.temporDolorProident}>
                It took so long for this desktop version of Threads to come out,
                but I'm really excited to start posting tips and content
                directly from the computer
              </div>
            </div>
            <div className={styles.carrossel}>
              <img
                className={styles.carrosselChild}
                alt=""
                src="/rectangle-9@2x.png"
              />
              <img
                className={styles.carrosselChild}
                alt=""
                src="/rectangle-8@2x.png"
              />
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like.svg" />
              <img className={styles.likeIcon} alt="" src="/comment.svg" />
              <img className={styles.likeIcon} alt="" src="/repost.svg" />
              <img className={styles.likeIcon} alt="" src="/send.svg" />
            </div>
            <div className={styles.respostasECurtidas}>
              <div className={styles.respostas}>7 respostas</div>
              <div className={styles.respostasECurtidasChild} />
              <div className={styles.respostas}>59 curtidas</div>
            </div>
          </div>
        </div>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar3.svg" />
            <img className={styles.threadItem} alt="" src="/vector-12.svg" />
            <img className={styles.avatarIcon3} alt="" src="/avatar4.svg" />
          </div>
          <div className={styles.infosActions}>
            <div className={styles.infos}>
              <div className={styles.headingInfos}>
                <div className={styles.aura}>aura</div>
                <div className={styles.rightInfos}>
                  <div className={styles.min}>1min</div>
                  <div className={styles.dots}>
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                  </div>
                </div>
              </div>
              <div className={styles.temporDolorProident}>
                guys, just see that now we have a "Save for Later" I've been
                waiting for this so much
              </div>
            </div>
            <div className={styles.carrossel}>
              <img
                className={styles.carrosselChild}
                alt=""
                src="/rectangle-9@2x.png"
              />
              <img
                className={styles.carrosselChild}
                alt=""
                src="/rectangle-8@2x.png"
              />
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like.svg" />
              <img className={styles.likeIcon} alt="" src="/comment.svg" />
              <img className={styles.likeIcon} alt="" src="/repost.svg" />
              <img className={styles.likeIcon} alt="" src="/send.svg" />
            </div>
            <div className={styles.respostasECurtidas1}>
              <div className={styles.respostas}>7 respostas</div>
              <div className={styles.respostasECurtidasItem} />
              <div className={styles.respostas}>59 curtidas</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thread5}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon4} alt="" src="/avatar5.svg" />
          <img className={styles.threadItem} alt="" src="/vector-13.svg" />
          <img className={styles.avatarIcon3} alt="" src="/avatar6.svg" />
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
            <div className={styles.temporDolorProident}>
              I’ve been exploring ways of setting up variables in Figma if you
              have two different sets of global colours for light and dark
              themes with multiple brands. If you want to learn more about it,
              DM me, please
            </div>
          </div>
          <div className={styles.carrossel}>
            <img
              className={styles.carrosselChild}
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className={styles.carrosselChild}
              alt=""
              src="/rectangle-8@2x.png"
            />
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src="/like.svg" />
            <img className={styles.likeIcon} alt="" src="/comment.svg" />
            <img className={styles.likeIcon} alt="" src="/repost.svg" />
            <img className={styles.likeIcon} alt="" src="/send.svg" />
          </div>
          <div className={styles.respostasECurtidas2}>
            <div className={styles.respostas}>7 respostas</div>
            <div className={styles.respostasECurtidasItem} />
            <div className={styles.respostas}>59 curtidas</div>
          </div>
        </div>
      </div>
      <div className={styles.thread5}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src="/avatar7.svg" />
          <img className={styles.threadItem} alt="" src="/vector-14.svg" />
          <img className={styles.avatarIcon3} alt="" src="/avatar8.svg" />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.infos}>
            <div className={styles.headingInfos}>
              <div className={styles.aura}>aura</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>4min</div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.temporDolorProident}>
              Hold onto your seats, folks! The new iPhone is coming in hot,
              ready to rock our world! Imagine the stunning photos and videos
              I'll capture with this beauty! 📸💥 #BringItOnNewiPhone
              #BeyondExcited
            </div>
          </div>
          <div className={styles.carrossel}>
            <img
              className={styles.carrosselChild}
              alt=""
              src="/rectangle-9@2x.png"
            />
            <img
              className={styles.carrosselChild}
              alt=""
              src="/rectangle-8@2x.png"
            />
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src="/like.svg" />
            <img className={styles.likeIcon} alt="" src="/comment.svg" />
            <img className={styles.likeIcon} alt="" src="/repost.svg" />
            <img className={styles.likeIcon} alt="" src="/send.svg" />
          </div>
          <div className={styles.respostasECurtidas1}>
            <div className={styles.respostas}>7 respostas</div>
            <div className={styles.respostasECurtidasItem} />
            <div className={styles.respostas}>59 curtidas</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadsColContainer;
