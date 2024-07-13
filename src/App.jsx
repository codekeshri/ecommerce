import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { List } from "./components/ProductList/ProductList";
import { Header } from "./components/Header";
import { CartProvider } from "./components/Context/CartProvider";
import { CartContext } from "./components/Context/CartContext";
import { useContext } from "react";
import { CartList } from "./components/CartList/CartList";
import { Home } from "./pages/Home";
import { About } from "./pages/About/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
]);

function App() {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <RouterProvider router={router}>
        <CartProvider>
          <Header />
          <List />
        </CartProvider>
        {!cartCtx.cartClicked && <CartList />}
      </RouterProvider>
    </>
  );
}

export default App;
