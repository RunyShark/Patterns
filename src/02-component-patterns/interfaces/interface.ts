import { Props as ProductCard } from "../components/ProductCard";

export interface PropsTitle {
  title?: string;
  className?: string;
}
export interface PropsButtom {
  className?: string;
}

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
  (Props: ProductCard): JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
  Image: (Props: ProductImage) => JSX.Element;
  Buttons: (Props: PropsButtom) => JSX.Element;
}
