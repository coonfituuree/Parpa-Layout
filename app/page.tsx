import styles from './styles/Home.module.css';
import ProductCard from './components/ProductCard/ProductCard';
import { BEDDING_PRODUCTS, QUILTS_PRODUCTS } from './components/ProductCard/products-list';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.sectionTitle}>Для спальни</h1>
        <div className={styles.subSection}>
          <h2>Постельное белье</h2>
          <a className={styles.link} href="#">Смотреть все</a>
        </div>
        <div className={styles.grid}>
          {BEDDING_PRODUCTS.map((prod, i) => (
            <ProductCard key={i} {...prod} />
          ))}
        </div>
      </section>
      <section>
        <div className={styles.subSection}>
          <h2>Покрывала</h2>
          <a className={styles.link} href="#">Смотреть все</a>
        </div>
        <div className={styles.grid}>
          {QUILTS_PRODUCTS.map((prod, i) => (
            <ProductCard key={i} {...prod} />
          ))}
        </div>
      </section>
    </main>
  );
}