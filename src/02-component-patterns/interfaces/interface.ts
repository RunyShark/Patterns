import { Props as ProductCard } from "../components/ProductCard";

export interface Product {
  id: number;
  title: string;
  img?: string;
}
export interface ProductImage {
  img?: string;
  className?: string;
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
  Title: ({
    title,
    className,
  }: {
    title?: string;
    className?: string;
  }) => JSX.Element;
  Image: ({ img, className }: ProductImage) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}
