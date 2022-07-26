import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import style from "../styles/styles.module.css";

const { buttonsContainer, buttonMinus, countLabel, buttonAdd } = style;

export const ProductButton = () => {
  const { countet, increaseBy } = useContext(ProductContext);
  return (
    <div className={buttonsContainer}>
      <button className={buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={countLabel}>{countet}</div>
      <button className={buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
