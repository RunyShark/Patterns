import { createContext, useContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { Props, ProductContextProps } from "../interfaces/interface";
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

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShown: string;

  if (img) {
    imgToShown = img;
  } else if (product.img) {
    imgToShown = product.img;
  } else {
    imgToShown = noImage;
  }
  return <img className={productImg} src={imgToShown} alt="Productimg" />;
};
export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={productDescription}>{title ? title : product.title}</span>
  );
};

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
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButton;
