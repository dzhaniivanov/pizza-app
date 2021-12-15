import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+1 234 567</div>
        </div>
      </div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Navbar;
