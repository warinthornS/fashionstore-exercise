import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({
  numberOfItems: 0,
  addNumberOfItems: (_: number) => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [numberOfItems, setNumberOfItems] = useState(0);

  const addNumberOfItems = (amount: number) => {
    setNumberOfItems(numberOfItems + amount);
  };
  return (
    <CartContext.Provider
      value={{
        numberOfItems,
        addNumberOfItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
