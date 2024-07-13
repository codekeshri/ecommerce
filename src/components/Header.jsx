import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { CartContext } from "./Context/CartContext";
import { useContext, useState } from "react";

export const Header = () => {
  const cartCtx = useContext(CartContext);

  const [cartClicked, setCartClicked] = useState(false);

  const showCart = () => {
    setCartClicked(true);
    cartCtx.cartClicked = true;
    console.log("cart clicked", cartClicked, cartCtx.cartClicked);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <h1>Colors</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#cart">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa"
                  onClick={showCart}
                />
                <span className="badge">{cartCtx.items.length}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#c" onClick={showCart}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// export default Header;
