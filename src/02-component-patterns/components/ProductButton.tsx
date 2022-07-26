import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import style from "../styles/styles.module.css";
import { PropsButtom } from "../interfaces/interface";

const { buttonsContainer, buttonMinus, countLabel, buttonAdd } = style;

export const ProductButton = ({ className }: PropsButtom) => {
  const { countet, increaseBy } = useContext(ProductContext);
  return (
    <div className={`${buttonsContainer} ${className}`}>
      <button
        className={`${buttonMinus} ${className}`}
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={`${countLabel}  ${className}`}>{countet}</div>
      <button
        className={`${buttonAdd} ${className}`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
