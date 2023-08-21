import AvatarBig from "./avatar-big-icon";
import styles from "./user-info.module.css";
const UserInfo = () => {
  return (
    <div className={styles.userinfo}>
      <div className={styles.infos}>
        <AvatarBig imageDescription="/avatar-big.svg" />
        <div className={styles.infos1}>
          <div className={styles.infos2}>
            <h2 className={styles.nicoLocofy}>Nico @ Locofy</h2>
            <div className={styles.infos3}>
              <div className={styles.nicolocofy}>nico@locofy</div>
              <div className={styles.threadsnetWrapper}>
                <div className={styles.threadsnet}>threads.net</div>
              </div>
            </div>
          </div>
          <div className={styles.softwareEngineerContainer}>
            <p className={styles.softwareEngineer}>
              Software Engineer | Let's redesign the world
            </p>
            <p className={styles.softwareEngineer}>nico@locofy.ai</p>
          </div>
        </div>
      </div>
      <div className={styles.infos4}>
        <div className={styles.respostasECurtidas}>
          <div className={styles.seguidores}>2957 seguidores</div>
          <div className={styles.respostasECurtidasChild} />
          <div className={styles.seguidores}>rochinski.com</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
