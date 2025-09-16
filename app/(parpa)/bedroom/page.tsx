import styles from "../../styles/Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import {
  BEDDING_PRODUCTS,
  QUILTS_PRODUCTS,
} from "../../components/ProductCard/products-list";
import Breadcrumbs from "@/app/components/BreadCrumbs";
import Link from "next/link"

export default function Bedroom() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <section>
        <h1 className={styles.sectionTitle}>Для спальни</h1>
        <div className={styles.subSection}>
          <h2>Постельное белье</h2>
          <Link href="/bedroom/bedding" className={styles.link}>
            Смотреть все
          </Link>
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
          <a className={styles.link} href="#">
            Смотреть все
          </a>
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
