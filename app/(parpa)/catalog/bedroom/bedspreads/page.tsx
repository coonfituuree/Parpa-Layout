import styles from "../../../../styles/Home.module.css";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { QUILTS_PRODUCTS } from "../../../../components/ProductCard/products-list";
import Breadcrumbs from "@/app/components/BreadCrumbs";

export default function Bedspreads() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <section>
        <h1 className={styles.sectionTitle}>For Bedroom</h1>
        <div className={styles.subSection}>
          <h2>Bedspreads</h2>
        </div>
        <div className="mb-4 text-xl">{QUILTS_PRODUCTS.length} products</div>
        <div className={styles.grid}>
          {QUILTS_PRODUCTS.map((prod, i) => (
            <ProductCard key={i} {...prod} />
          ))}
        </div>
      </section>
    </main>
  );
}
