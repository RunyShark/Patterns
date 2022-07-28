import { useState } from "react";
import { Product, onChangeArg } from "../interfaces/interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArg) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
  const [countet, setCountet] = useState(0);
  const increaseBy = (value: number) => {
    const newValue = Math.max(countet + value, 0);

    setCountet(newValue);

    onChange && onChange({ count: newValue, product });
  };

  return {
    countet,
    increaseBy,
  };
};
