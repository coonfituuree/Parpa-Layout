import Image from "next/image";
import styles from "../styles/AboveFooter.module.css";

const AboveFooter = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/above_footer.png"
        alt="Above Footer"
        fill
        className={styles.bgImage}
      />
      <div className={styles.overlay}>
        <h2>Stay informed</h2>
        <p>Subscribe to our newsletter and be the first to receive the latest news</p>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default AboveFooter;
