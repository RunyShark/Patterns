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
        <ProductCard product={product1} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Chupapi" className="text-white" />
          <ProductCard.Buttons className="custom-buttoms" />
        </ProductCard>

        <ProductCard product={product1} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle title="Wenas" className="text-white" />
          <ProductButton className="custom-buttoms" />
        </ProductCard>

        <ProductCard product={product1} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage />
          <ProductTitle title="Wenas" />
          <ProductButton />
        </ProductCard>
      </div>
    </div>
  );
};
