import React, { useState } from 'react';
import './App.css'
import { FaBeer } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1 class="text-3xl font-bold underline bg-amber-500">
    Hello world!
  </h1>
  <FaBeer/>
    </>
  );
}

export default App;
