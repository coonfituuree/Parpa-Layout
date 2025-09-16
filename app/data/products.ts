import type { Product } from './../types/product';

export const products: Product[] = [
  {
    slug: 'monochrome',
    title: 'Monochrome',
    priceFrom: 31500,
    inStock: true,
    images: ['/bed12.jpg','/bed12.jpg','/bed12.jpg'],
    description: 'Комплект постельного белья Bicolor из длинноволокнистого хлопка...',
    attributes: [
      { label: 'Производство', value: 'Италия' },
      { label: 'Материал', value: 'Длинноволокнистый сатин' },
      { label: 'Происхождение материала', value: 'Египет' }
    ],
    delivery: 'Доставка в рабочие дни с 9:00 до 18:00. Возможна доставка в субботу...',
    payment: 'Банковские карты Visa, MasterCard, МИР. Оплата при переводе...',
    badges: ['Примерка перед оплатой', 'Бесплатная доставка']
  },
  {
    slug: 'double-cordonetto',
    title: 'Double Cordonetto',
    priceFrom: 62500,
    inStock: true,
    images: ['/bed2.jpg','/bed2.jpg','/bed2.jpg'],
    description: 'Комплект постельного белья Bicolor из длинноволокнистого хлопка...',
    attributes: [
      { label: 'Производство', value: 'Италия' },
      { label: 'Материал', value: 'Длинноволокнистый сатин' },
      { label: 'Происхождение материала', value: 'Египет' }
    ],
    delivery: 'Доставка в рабочие дни с 9:00 до 18:00. Возможна доставка в субботу...',
    payment: 'Банковские карты Visa, MasterCard, МИР. Оплата при переводе...',
    badges: ['Примерка перед оплатой', 'Бесплатная доставка']
  },
];