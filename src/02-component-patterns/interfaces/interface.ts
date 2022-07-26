import { Props as ProductCard } from "../components/ProductCard";

export interface Product {
  id: number;
  title: string;
  img?: string;
}

export interface ProductButtonsProps {
  increaseBy: (value: number) => void;
  countet: number;
}

export interface ProductContextProps {
  countet: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCard): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
