import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.types';
import Image from 'next/image';

export default function ProductCard({ image, title, subtitle, price }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} alt={title} width={281} height={281}/>
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
    </div>
  );
}