import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import style from "../styles/styles.module.css";
const { productDescription } = style;

export const ProductTitle = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
