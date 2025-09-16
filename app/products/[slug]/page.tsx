import { notFound } from "next/navigation";
import ProductGallery from "../../components/ProductGallery";
import { Accordion } from "../../components/Accordion";
import { products } from "../../data/products";
import type { Product } from "../../types/product";
import Breadcrumbs from "@/app/components/BreadCrumbs";

export const revalidate = 3600;

export async function generateStaticParams() {
  return products.map((product: Product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = products.find((p: Product) => p.slug === slug);
  if (!product) notFound();

  return (
    <main className="container mx-auto px-4 lg:px-10 py-6 lg:py-10">
      <Breadcrumbs />
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <ProductGallery images={product.images} />
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-6 space-y-6">
            <div>
              <h1 className="text-3xl font-serif">{product.title}</h1>
              <p className="text-sm text-zinc-500 mt-1">
                Коллекция постельного белья
              </p>
            </div>
            <div>
              <div className="text-zinc-900">
                от {product.priceFrom.toLocaleString("ru-RU")} ₽
              </div>
              <div className="text-xs text-emerald-600 mt-1">
                {product.inStock ? "В наличии" : "Нет в наличии"}
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full h-11 rounded bg-[#c2a592] hover:bg-[#be9b84] text-white">
                Собрать комплект
              </button>
              <button className="w-full h-11 rounded border border-zinc-200 hover:bg-zinc-50">
                В избранное
              </button>
              <ul className="text-sm text-zinc-600 space-y-1">
                {product.badges.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="divide-y rounded">
              <Accordion title="Описание">{product.description}</Accordion>
              <Accordion title="Характеристики">
                <dl className="grid grid-cols-2 gap-y-2 text-sm">
                  {product.attributes.map((a, i) => (
                    <div key={i} className="contents">
                      <dt className="text-zinc-500">{a.label}</dt>
                      <dd className="text-right">{a.value}</dd>
                    </div>
                  ))}
                </dl>
              </Accordion>
              <Accordion title="Доставка">{product.delivery}</Accordion>
              <Accordion title="Способы оплаты">{product.payment}</Accordion>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
