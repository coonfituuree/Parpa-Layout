import Link from "next/link";
import { BeddingCardProps } from "../types/bedding";
import styles from "../styles/BeddingCard.module.css";
import Image from "next/image";

const BeddingCard = ({
  slug,
  image,
  title,
  subtitle,
  price,
}: BeddingCardProps) => {
  return (
    <Link href={`/products/${slug}`} className={styles.global}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
        width={281}
        height={281}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.bottom}>
          <span className={styles.price}>от {price} ₽</span>
          <button className={styles.arrowBtn} aria-label="Подробнее">
            &rarr;
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BeddingCard;
