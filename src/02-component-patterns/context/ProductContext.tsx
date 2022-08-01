import { createContext } from "react";
import { ProductContextProps } from "../interfaces/interface";

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;
