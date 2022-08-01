import { Props as ProductCard } from "../components/ProductCard";
import { CSSProperties } from "react";

export interface PropsTitle {
  title?: string;
  className?: string;
  style?: CSSProperties;
}
export interface PropsButtom {
  className?: string;
  style?: CSSProperties;
}

export interface Product {
  id: number;
  title: string;
  img?: string;
}
export interface ProductImage {
  img?: string;
  className?: string;
  style?: CSSProperties;
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

export interface onChangeArg {
  product: Product;
  count: number;
}
