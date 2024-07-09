import "./List.css";

export const List = () => {
  const productsArr = [
    {
      title: "Rainbow",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black ",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div className="product-container">
      <ul className="product-list">
        {productsArr.map((product, index) => {
          return (
            <li key={index} className="product-item">
              <p className="product-title">{product.title}</p>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="product-image"
              />
              <br />
              <span className="product-price">${product.price}</span>
              <button className="add-to-cart">ADD TO CART</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
