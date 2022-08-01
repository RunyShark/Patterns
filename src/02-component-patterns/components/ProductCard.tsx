import { CSSProperties, ReactElement } from "react";
import { Provider } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";
import { Product, onChangeArg } from "../interfaces/interface";

import style from "../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArg) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  style: stile,
  onChange,
}: Props) => {
  const { countet, increaseBy } = useProduct({ onChange, product });
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
