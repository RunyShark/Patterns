import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
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

export interface ProductContextProps {
  countet: number;
  increaseBy: (value: number) => void;
  product: Product;
}
