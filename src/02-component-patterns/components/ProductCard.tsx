import { Provider } from "../context/ProductContext";
import { useProduct } from "../hooks/useProduct";
import { Props } from "../interfaces/interface";

import style from "../styles/styles.module.css";

const { productCard } = style;

export const ProductCard = ({ children, product }: Props) => {
  const { countet, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        countet,
        increaseBy,
        product,
      }}
    >
      <div className={productCard}>{children}</div>
    </Provider>
  );
};
