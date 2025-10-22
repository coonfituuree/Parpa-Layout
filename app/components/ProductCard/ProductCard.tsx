import Link from "next/link";
import styles from "@/app/styles/ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.types";
import Image from "next/image";

  
export default function ProductCard({
  slug,
  image,
  title,
  subtitle,
  price,
}: ProductCardProps) {
  return (
    <Link href={`/catalog/bedroom/bedding/${slug}`} className={styles.card}>
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
          <span className={styles.price}>from {price} $</span>
          <button className={styles.arrowBtn} aria-label="Подробнее">
            &rarr;
          </button>
        </div>
      </div>
    </Link>
  );
}
