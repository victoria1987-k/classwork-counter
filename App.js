import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount (count + 1)
  };

  
  return (
    <div className="App">
      {count ? <p>You have too much money in the bag</p> : <p>You have no items in your cart</p>}
      <Product myCount = {count} handleClick = {handleClick} />
    </div>
  );
}

export default App;
