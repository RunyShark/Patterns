import { useState } from "react";
export const useProduct = () => {
  const [countet, setCountet] = useState(0);
  const increaseBy = (value: number) => {
    setCountet((prev) => Math.max(prev + value, 0));
  };

  return {
    countet,
    increaseBy,
  };
};
