import { CSSProperties, ReactElement } from "react";
import { Provider } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces/interface";

import style from "../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({
  children,
  product,
  className,
  style: stile,
}: Props) => {
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
      <div className={`${productCard} ${className}`} style={stile}>
        {children}
      </div>
    </Provider>
  );
};
