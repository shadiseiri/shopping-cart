import React, { createContext, useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();
// const initialstate = [
//   { title: "React.js", price: "99 $", id: 1, quantity: 1 },
//   { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
//   { title: "JavaScript", price: "79 $", id: 3, quantity: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "remove": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }

    case "filter": {
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0
        );
        return updatedProducts;
      }
    }

    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filteredProducts;
      }
    }

    default:
      return state;
  }
};

const ProductsProviders = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProviders;

export const useProducts = () => useContext(ProductContext);
export const useProducsActions = () => useContext(ProductContextDispatcher);
//   const products = useContext(ProductContext);

//   const removeHandler = (id) => {
//     const filteredProducts = products.filter((p) => p.id !== id);
//     setProducts(filteredProducts);
//   };

//   const incrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     product.quantity++;
//     const updatedProducts = [...products];
//     updatedProducts[index] = product;
//     setProducts(updatedProducts);
//   };

//   const changeHandler = (event, id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     product.title = event.target.value;
//     const updatedProducts = [...products];
//     updatedProducts[index] = product;
//     setProducts(updatedProducts);
//   };

//   const decrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const product = { ...products[index] };
//     if (product.quantity === 1) {
//       const filteredProducts = products.filter((p) => p.id !== id);
//       setProducts(filteredProducts);
//     } else {
//       product.quantity--;
//       const updatedProducts = [...products];
//       updatedProducts[index] = product;
//       setProducts(updatedProducts);
//     }
//   };
