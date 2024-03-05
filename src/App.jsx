import { useState, useEffect } from "react";
import axios from "axios";
import { Header, Catalog } from "./sections";
import { Cart } from "./components";



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

   
  useEffect(() => {
    axios
      .get("https://65d74b6527d9a3bc1d7aa870.mockapi.io/items")
      .then((res) => setItems(res.data));
    axios
      .get("https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart", obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  
  const onRemoveItem = (id) => {
    console.log(id);
    // axios.delete(`https://65d74b6527d9a3bc1d7aa870.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
 
  return (
    <>
      {cartOpen && (
        <Cart
          onClickClose={() => setCartOpen(false)}
          items={cartItems}
          onRemoveItem={onRemoveItem}
        />
      )}
      <Header
        onClickCart={() => setCartOpen(true)}
        onSearchClear={() => setSearchValue("")}
      />

      <Catalog
        items={items}
        searchValue={searchValue}
        onBuy={(obj) => onAddToCart(obj)}
      />
    </>
  );
}

export default App
