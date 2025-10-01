export type Attr = { label: string; value: string };

export type Product = {
  id: number;
  slug: string;
  title: string;
  priceFrom: number;
  inStock: boolean;
  images: string[];
  description: string;
  attributes: Attr[];
  delivery: string;
  payment: string;
  badges: string[];
};