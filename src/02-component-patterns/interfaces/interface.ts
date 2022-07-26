export interface Props {
  product: Product;
}

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductButtonsProps {
  increaseBy: (value: number) => void;
  countet: number;
}
