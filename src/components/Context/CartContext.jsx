import React from "react";

export const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  numberOfItems: 0,
  cartClicked: false,
});
