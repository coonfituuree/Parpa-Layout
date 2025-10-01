import type { Product } from "./../types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "monochrome",
    title: "Monochrome",
    priceFrom: 749.99,
    inStock: true,
    images: ["/bed12.jpg", "/bed12.jpg", "/bed12.jpg"],
    description:
      "Комплект постельного белья Bicolor из длинноволокнистого хлопка...",
    attributes: [
      { label: "Производство", value: "Италия" },
      { label: "Материал", value: "Длинноволокнистый сатин" },
      { label: "Происхождение материала", value: "Египет" },
    ],
    delivery:
      "Доставка в рабочие дни с 9:00 до 18:00. Возможна доставка в субботу...",
    payment: "Банковские карты Visa, MasterCard, МИР. Оплата при переводе...",
    badges: ["Примерка перед оплатой", "Бесплатная доставка"],
  },
  {
    id: 2,
    slug: "double-cordonetto",
    title: "Double Cordonetto",
    priceFrom: 899.99,
    inStock: true,
    images: ["/bed2.jpg", "/bed2.jpg", "/bed2.jpg"],
    description: "Bicolor bedding set made of long fiber...",
    attributes: [
      { label: "Production", value: "Italy" },
      { label: "Material", value: "Long Staple Satin" },
      { label: "Origin of material", value: "Egypt" },
    ],
    delivery:
      "Delivery on weekdays from 9:00 to 18:00. Delivery possible on Saturday...",
    payment: "Bank cards Visa, MasterCard, MIR. Payment upon transfer...",
    badges: ["Try on before payment", "Free delivery"],
  },
];
