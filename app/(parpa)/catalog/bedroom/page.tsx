import styles from "../../../styles/Home.module.css";
import ProductCard from "../../../components/ProductCard/ProductCard";
import {
  BEDDING_PRODUCTS,
  QUILTS_PRODUCTS,
} from "../../../components/ProductCard/products-list";
import Breadcrumbs from "@/app/components/BreadCrumbs";
import Link from "next/link";

export default function Bedroom() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <section>
        <h1 className={styles.sectionTitle}>For Bedroom</h1>
        <div className={styles.subSection}>
          <h2>Bedding</h2>
          <Link href="/catalog/bedroom/bedding" className={styles.link}>
            Show all
          </Link>
        </div>
        <div className={styles.grid}>
          {BEDDING_PRODUCTS.slice(0, 4).map((prod, i) => (
            <ProductCard key={i} {...prod} />
          ))}
        </div>
      </section>
      <section>
        <div className={styles.subSection}>
          <h2>Bedspreads</h2>
          <a className={styles.link} href="/catalog/bedroom/bedspreads">
            Show all
          </a>
        </div>
        <div className={styles.grid}>
          {QUILTS_PRODUCTS.slice(0, 4).map((prod, i) => (
            <ProductCard key={i} {...prod} />
          ))}
        </div>
      </section>
    </main>
  );
}
