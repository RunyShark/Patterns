import {
  ProductCard,
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "./products";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
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
          <ProductCard key={product.id} product={product} className="bg-dark">
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
