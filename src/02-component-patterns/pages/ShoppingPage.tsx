import {
  ProductCard,
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../components";
//import { products } from "./products";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interface";
import { useState } from "react";
const product1 = {
  id: 1,
  title: "Coffe Mug",
  img: "./coffee-mug.png",
};
const product2 = {
  id: 2,
  title: "Coffe Mug meme",
  img: "./coffee-mug2.png",
};
const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shuppigCart, setShuppigCart] = useState<{
    [key: number]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log(product);
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButton className="custom-buttoms" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        <ProductCard
          product={products[1]}
          className="bg-dark"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />

          <ProductButton className="custom-buttoms" />
        </ProductCard>

        <ProductCard
          product={products[0]}
          className="bg-dark"
          style={{ width: "100px" }}
        >
          <ProductImage className="custom-image" />
          <ProductButton className="custom-buttoms" />
        </ProductCard>
      </div>
    </div>
  );
};
