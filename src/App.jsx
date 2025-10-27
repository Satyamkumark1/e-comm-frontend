import React, { useState } from 'react';
import './App.css'
import { FaBeer } from 'react-icons/fa';
import Product from './components/Product';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Product/>
    </>
  );
}

export default App;
