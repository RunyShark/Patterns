import {
  ProductCard,
  ProductButton,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product1 = {
  id: 1,
  title: "Cafelico",
  img: "./coffee-mug.png",
};

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
        <ProductCard product={product1}>
          <ProductCard.Image />
          <ProductCard.Title title="Chupapi" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product1} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle title="Wenas" className="text-white" />
          <ProductButton className="custom-buttoms" />
        </ProductCard>
      </div>
    </div>
  );
};
