import { ProductCard } from "../components/ProductCard";

const product1 = {
  id: 1,
  title: "Cafelico",
  img: "./coffee-mug.png",
};
const product2 = {
  id: 2,
  title: "Pizza",
};
const product3 = {
  id: 3,
  title: "PCalabaz",
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
        <ProductCard product={product1} />
        <ProductCard product={product2} />
        <ProductCard product={product3} />
      </div>
    </div>
  );
};
