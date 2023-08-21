import styles from "./avatar-big-icon.module.css";
const AvatarBig = ({ imageDescription }) => {
  return <img className={styles.avatarBigIcon} alt="" src={imageDescription} />;
};

export default AvatarBig;
