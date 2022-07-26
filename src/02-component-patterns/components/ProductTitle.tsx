import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import style from "../styles/styles.module.css";
import { PropsTitle } from "../interfaces/interface";
const { productDescription } = style;

export const ProductTitle = ({ title, className }: PropsTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
