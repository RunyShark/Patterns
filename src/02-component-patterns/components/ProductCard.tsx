import { useProduct } from "../hooks/useProduct";
import { Props } from "../interfaces/interface";
import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductCard = ({ product }: Props) => {
  const { countet, increaseBy } = useProduct();
  const {
    productCard,
    productImg,
    productDescription,
    buttonsContainer,
    buttonMinus,
    countLabel,
    buttonAdd,
  } = style;
  const { id, title, img } = product;
  return (
    <div className={productCard}>
      <img className={productImg} src={img ? img : noImage} alt="Coffee Mug" />

      <span className={productDescription}>{title}</span>

      <div className={buttonsContainer}>
        <button className={buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={countLabel}>{countet}</div>
        <button className={buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};
