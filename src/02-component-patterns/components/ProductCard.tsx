import { Provider } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces/interface";

import style from "../styles/styles.module.css";
import { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {
  const { countet, increaseBy } = useProduct();
  const { productCard } = style;
  return (
    <Provider
      value={{
        countet,
        increaseBy,
        product,
      }}
    >
      <div className={`${productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
