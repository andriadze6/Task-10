export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  priceDiscoun?: number;
  discountPersentage?: number;
  rating?: number;
  tags: string[];
  minimumOrderQuantity: number;
  color: string[];
  img: {
    [key: string]: string[];
  };
  stock: {
    [key: string]: {
      [key: string]: number;
    };
  };
  size: {
    [key: string]: string[];
  };
  gender: string;
}
