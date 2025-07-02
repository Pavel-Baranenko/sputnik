export type Product = {
  id: number;
  title: string;
  origin: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl?: string;
}