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
      "The Monochrome bedding set is made of long-staple cotton, providing exceptional softness, durability, and comfort for restful sleep. The elegant two-tone design adds sophistication to any bedroom interior.",
    attributes: [
      { label: "Production", value: "Italy" },
      { label: "Material", value: "Long-staple satin" },
      { label: "Origin of material", value: "Egypt" },
    ],
    delivery:
      "Delivery on weekdays from 9:00 AM to 6:00 PM. Saturday delivery is available upon request. All items are carefully packaged to ensure safety during transport.",
    payment:
      "Payment options include Visa, MasterCard, and MIR bank cards. Payment can be made by transfer or upon delivery.",
    badges: ["Try before payment", "Free delivery"],
  },
  {
    id: 2,
    slug: "double-cordonetto",
    title: "Double Cordonetto",
    priceFrom: 899.99,
    inStock: true,
    images: ["/bed2.jpg", "/bed2.jpg", "/bed2.jpg"],
    description:
      "The Double Cordonetto bedding set is crafted from long-staple satin cotton, offering a smooth texture and luxurious sheen. Its refined design and Italian craftsmanship guarantee elegance and superior comfort.",
    attributes: [
      { label: "Production", value: "Italy" },
      { label: "Material", value: "Long-staple satin" },
      { label: "Origin of material", value: "Egypt" },
    ],
    delivery:
      "Delivery on weekdays from 9:00 AM to 6:00 PM. Saturday delivery available upon request. Each order is securely packed and shipped with care.",
    payment:
      "Payment options include Visa, MasterCard, and MIR cards. Payment can be made via bank transfer or upon delivery.",
    badges: ["Try before payment", "Free delivery"],
  },
];
