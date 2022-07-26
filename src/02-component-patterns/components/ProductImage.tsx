import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductImage as ProductImageInterface } from "../interfaces/interface";

const { productImg } = style;

export const ProductImage = ({ img, className }: ProductImageInterface) => {
  const { product } = useContext(ProductContext);
  let imgToShown: string;

  if (img) {
    imgToShown = img;
  } else if (product.img) {
    imgToShown = product.img;
  } else {
    imgToShown = noImage;
  }
  return (
    <img
      className={`${productImg} ${className}`}
      src={imgToShown}
      alt="Productimg"
    />
  );
};
