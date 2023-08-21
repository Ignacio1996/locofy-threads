import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.threadsLogoIcon}
          alt=""
          src="/threadsImages/threads-logo.svg"
        />
        <div className={styles.threads}>threads</div>
      </div>
      <div className={styles.avatar}>
        <div className={styles.righInfos}>
          <img
            className={styles.logo2Icon}
            alt=""
            src="/threadsImages/logo-2.svg"
          />
          <img
            className={styles.hamburgerIcon}
            alt=""
            src="/threadsImages/hamburger.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
