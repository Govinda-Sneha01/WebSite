import "./App.css";
import React, { useState } from "react";
import img11 from "../src/images/img11.jpg";
import img22 from "../src/images/img22.jpg";
import img33 from "../src/images/img33.jpg";
import img99 from "../src/images/img99.jpg";
import img55 from "../src/images/img55.jpg";
import img44 from "../src/images/img44.jpeg";
import img222 from "../src/images/img222.jpeg";
import img111 from "../src/images/img111.jpeg";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([...cart, { item, price: 140, count: 1, total: 140 }]);
  };
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const increment = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    updatedCart[index].total =
      updatedCart[index].count * updatedCart[index].price;
    setCart(updatedCart);
  };
  const decrement = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      updatedCart[index].total =
        updatedCart[index].count * updatedCart[index].price;
      setCart(updatedCart);
    } else {
      removeFromCart(index);
    }
  };
  return (
    <div className="App">
       <header>
       <h1>E-commerce Website</h1>
      </header>
      <div className="image-row">
        <div className="image-container">
          <img
            className="img1"
            src={img11}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img11)}>Add to Cart</button>
        </div>
        <div className="image-container">
          <img
            className="img1"
            src={img22}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img22)}>Add to Cart</button>
        </div>
        <div className="image-container">
          <img
            className="img1"
            src={img33}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img33)}>Add to Cart</button>
        </div>
        <div className="image-container">
          <img
            className="img111"
            src={img111}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img111)}>Add to Cart</button>
        </div>
        <div className="img-container">
          <div className="cart">
            <ul>
              <div className="cart">
                <ul>
                  {cart.map((citem, index) => (
                    <li key={index}>
                      <img
                        src={citem.item}
                        height={200}
                        width={200}
                        alt={`item${index}`}
                      />
                      <button onClick={() => removeFromCart(index)}>
                        Remove
                      </button>
                      <p>Price: ${citem.price}</p>
                      <p>Quantity: {citem.count}</p>
                      <p>Total: ${citem.total}</p>

                      <button onClick={() => increment(index)}>+</button>
                      <button onClick={() => decrement(index)}>-</button>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="imag-row">
        <div className="imag-column"></div>
        <div className="image-container">
          <img
            className="img1"
            src={img99}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img99)}>Add to Cart</button>
        </div>

        <div className="image-container">
          <img
            className="img1"
            src={img55}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img55)}>Add to Cart</button>
        </div>
        <div className="image-container">
          <img
            className="img1"
            src={img44}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img44)}>Add to Cart</button>
        </div>
        <div className="image-container">
          <img
            className="img1"
            src={img222}
            alt="img"
            height={200}
            width={200}
          />
          <p>$140</p>
          <button onClick={() => addToCart(img222)}>Add to Cart</button>
        </div>
      </div>
    </div>
  
  );
}
export default App;
