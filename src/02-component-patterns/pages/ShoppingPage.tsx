import { ProductCard } from "../components";

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
        {/* <ProductCard product={product1}>
          <ProductCard.Image />
          <ProductCard.Title title={"Cafe"} />
          <ProductCard.Buttons countet={countet} increaseBy={increaseBy} />
        </ProductCard> */}

        <ProductCard product={product1}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product1}>
          <ProductCard.Image />
          <ProductCard.Title title="Chupapi" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
