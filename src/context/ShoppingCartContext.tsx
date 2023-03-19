import { createContext, ReactNode, useContext, useState } from "react";
import { TProduct } from "../Types";
import { useLocalStorage } from "./useLocalStorage";

type ShoppingCartContext = {
  getItemQuantity: (product: TProduct) => number;
  increaseCartQuantity: (newProduct: TProduct) => void;
  decreaseCartQuantity: (product: TProduct) => void;
  removeFromCart: (product: TProduct) => void;
  cartTotalPrice: (products: CartItem[]) => number;
  cartItems: CartItem[];
  cartQuantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type CartItem = {
  product: TProduct;
  quantity: number;
};

interface IShoppingCartProvider {
  children: ReactNode;
}

export function ShoppingCartProvider({ children }: IShoppingCartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping cart",
    []
  );

  const cartQuantity = cartItems?.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  function getItemQuantity(product: TProduct) {
    return (
      cartItems.find((item) => item.product.id === product.id)?.quantity || 0
    );
  }
  function increaseCartQuantity(newProduct: TProduct) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === newProduct.id) == null) {
        return [...currItems, { product: newProduct, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.product.id === newProduct.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(product: TProduct) {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.product.id === product.id)?.quantity === 1
      ) {
        return currItems.filter((item) => item.product.id !== product.id);
      } else {
        return currItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(product: TProduct) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.product.id !== product.id);
    });
  }

  function cartTotalPrice(products: CartItem[]) {
    const prices: number[] = [];
    for (let i = 0; i < cartItems.length; i++) {
      const price = cartItems[i].product.price * cartItems[i].quantity;
      prices.push(price);
    }

    return (
      Math.round((prices.reduce((a, b) => a + b, 0) + Number.EPSILON) * 100) /
      100
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartTotalPrice,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
