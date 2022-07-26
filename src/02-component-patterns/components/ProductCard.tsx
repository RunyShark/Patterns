import { useProduct } from "../hooks/useProduct";
import { Props, ProductButtonsProps } from "../interfaces/interface";
import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
const {
  productCard,
  productImg,
  productDescription,
  buttonsContainer,
  buttonMinus,
  countLabel,
  buttonAdd,
} = style;
export const ProductImage = ({ img = "" }) => {
  return (
    <img className={productImg} src={img ? img : noImage} alt="Productimg" />
  );
};
export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={productDescription}>{title}</span>;
};

export const ProductButton = ({ countet, increaseBy }: ProductButtonsProps) => {
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

export const ProductCard = ({ product }: Props) => {
  const { countet, increaseBy } = useProduct();
  const { title, img } = product;

  return (
    <div className={productCard}>
      <ProductImage img={img} />

      <ProductTitle title={title} />
      <ProductButton countet={countet} increaseBy={increaseBy} />
    </div>
  );
};
