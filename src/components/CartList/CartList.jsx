import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export const CartList = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx, "CartList");
  return (
    <div>
      {cartCtx.items.map((item, index) => {
        <li key={index}>
          <div>
            <img src={item.imageUrl} alt={item.title} />
          </div>
          <div>
            {item.title}
            <p>${item.price}</p>
            <p>{item.quantity}</p>
          </div>
        </li>;
      })}
    </div>
  );
};
